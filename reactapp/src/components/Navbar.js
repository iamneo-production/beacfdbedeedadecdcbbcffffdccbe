import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
   const handleListItemClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a list item is clicked
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <Hidden smUp>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              VacServ
            </Typography>
          </div>
          <Hidden smDown>
            <div>
              {/* Conditionally render buttons based on drawer state */}
              {!isDrawerOpen && (
                <>
                  <Button color="inherit">Home</Button>
                  <Button color="inherit">Dashboard</Button>
                  <Button color="inherit">My Bookings</Button>
                </>
              )}
            </div>
          </Hidden>
          <div>
            <Button color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        variant="temporary"
      >
        <List>
          <ListItem button  onClick={handleListItemClick}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button  onClick={handleListItemClick}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button  onClick={handleListItemClick}>
            <ListItemText primary="My Bookings" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}