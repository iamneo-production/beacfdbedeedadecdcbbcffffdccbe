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
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeleteCenterConfirmationModal from "./DeleteCenterConfirmationModal";

export default function GridCardsAdmin({ searchTerm, sortOrder, serviceCenters }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log('Params:', params);
  const { userId } = params; // Use "id" instead of "userId"
  console.log('User ID:', userId);

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleCardClick = (serviceCenter) => {
    console.log("Clicked Card:", serviceCenter);
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
    console.log('HANDLE DELETE User ID check:', userId);
    console.log(' HANDLE DELETE Service Center ID check:', serviceCenterId);
    setIsConfirmationModalOpen(true);
    console.log("No Errors");
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/deleteServiceCenter/${serviceCenterId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Service Center Deleted Successfully");
        } else {
          console.error("Error deleting service center");
        }
      })
      .catch((error) => {
        console.error("Error deleting service center:", error);
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
                  <DeleteCenterConfirmationModal
                      open={isConfirmationModalOpen}
                      handleClose={handleConfirmationModalClose}
                    />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
