import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function GridCardsAdmin({ searchTerm, sortOrder, serviceCenters }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log('Params:', params);
  const { userId } = params; // Use "id" instead of "userId"
  console.log('User ID:', userId);

  const handleCardClick = (serviceCenter) => {
    console.log("Clicked Card:", serviceCenter);
  };

  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);

  const openDeleteConfirmationModal = () => {
    setIsDeleteConfirmationModalOpen(true);
  };

  const closeDeleteConfirmationModal = () => {
    setIsDeleteConfirmationModalOpen(false);
  };

  const handleEditCardClick = (serviceCenterId) => {
    console.log('Navigating to edit page with userId:', userId);
    console.log('ServiceCenter ID:', serviceCenterId);
    const cardData = serviceCenters.find(
      (center) => center.serviceCenterId === serviceCenterId
    );
    navigate(`/admin/editServiceCenter/${userId}/${serviceCenterId}`, {
      state: { cardData } // Pass the cardData object as state
    });
  }

  const handleDelete = (serviceCenterId) => {
    openDeleteConfirmationModal();
    console.log('HANDLE DELETE User ID check:', userId);
    console.log(' HANDLE DELETE Service Center ID check:', serviceCenterId);
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/deleteServiceCenter/${serviceCenterId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Service Center Deleted Successfully");
      } else {
        console.error("Error deleting service center");
      }
      closeDeleteConfirmationModal();
    })
    .catch((error) => {
      console.error("Error deleting service center:", error);
      closeDeleteConfirmationModal();
    });
  };

  // Filter the cards based on the search term
  const filteredCards = serviceCenters.filter((center) =>
    center.serviceCenterName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCards = [...filteredCards].sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);

    if (sortOrder === "ascending") {
      return priceA - priceB;
    } else if (sortOrder === "descending") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <main>
      {/* Hero unit */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {sortedCards.map((serviceCenter) => (
            <Grid item key={serviceCenter.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => handleCardClick(serviceCenter)}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={serviceCenter.serviceCenterImageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {serviceCenter.serviceCenterName}
                  </Typography>
                  <Typography>
                    <strong>Place: </strong>
                    {serviceCenter.serviceCenterAddress}
                  </Typography>
                  <Typography>
                    <strong>Timing: </strong>
                    {serviceCenter.ServiceCenterTimings}
                  </Typography>
                  <Typography>
                    <strong>Rating: </strong>
                    {serviceCenter.serviceCenterDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Button
                      size="small"
                      style={{ color: "black", fontSize: "16px" }}
                      onClick={() => handleEditCardClick(serviceCenter.serviceCenterId)}
                    >
                      Edit
                    </Button>
                  </div>
                  <Button
                    size="small"
                    style={{ color: "black", fontSize: "16px" }}
                    onClick={() => handleDelete(serviceCenter.serviceCenterId)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    {isDeleteConfirmationModalOpen && (
      <div className="delete-confirmation-modal">
        <div className="modal-content">
          <h2>Delete Confirmation</h2>
          <p>Are you sure you want to delete this service center?</p>
          <div className="modal-buttons">
            <Button
              variant="contained"
              style={{ backgroundColor: "#f44336" }}
              onClick={handleDelete}
            >
              Confirm Delete
            </Button>
            <Button
              variant="outlined"
              style={{ color: "#00cf00" }}
              onClick={closeDeleteConfirmationModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    )}
    </main>
  );
}
  