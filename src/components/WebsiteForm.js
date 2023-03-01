import React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl"
import Button from "@mui/material/Button"
import FrostyButton from "./FrostyButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Typography from "@mui/material/Typography";
import axios from "axios";
function FormView() {
    const [openForm, setOpenForm] = React.useState(false);
    const [website, setWebsite] = React.useState("");
    const [websiteUrl, setWebsiteUrl] = React.useState("");
    const [productTag, setProductTag] = React.useState("");
    const [productFilter, setProductFilter] = React.useState("");
    const [nameTag, setNameTag] = React.useState("");
    const [nameFilter, setNameFilter] = React.useState("");
    const [priceTag, setPriceTag] = React.useState("");
    const [priceFilter, setPriceFilter] = React.useState("");
    const [availabilityTag, setAvailabilityTag] = React.useState("");
    const [availabilityFilter, setAvailabilityFilter] = React.useState("");
    const [urlTag, setUrlTag] = React.useState("");
    const [urlFilter, setUrlFilter] = React.useState("");

    const handleOpenForm = () => {
        setOpenForm(true);
      };
    const handleCloseForm = () => {
      setOpenForm(false);
    };
    const handleSubmit = () => {
      // Create an object with the state variables
      const scrapingObject = {
        website,
        websiteUrl,
        productTag,
        productFilter,
        nameTag,
        nameFilter,
        priceTag,
        priceFilter,
        availabilityTag,
        availabilityFilter,
        urlTag,
        urlFilter,
      };
    
      // Send a POST request with the scrapingObject as the request body
      axios.post("/create_scraping_object/", scrapingObject)
        .then((response) => {
          console.log(response);
          handleCloseForm();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <Box>
        <FrostyButton variant="contained" color="primary" onClick={handleOpenForm}>Add website
        </FrostyButton>
        <Dialog open={openForm} onClose={handleCloseForm}>
          <DialogTitle>Add Website</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                  fullWidth
                  id="website-name"
                  label="Website name"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="website-url"
                  label="Website URL"
                  value={websiteUrl}
                  onChange={(event) => setWebsiteUrl(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Product Filter</Typography>
                <TextField
                  fullWidth
                  id="product-tag"
                  label="'tag type'"
                  value={productTag}
                  onChange={(event) => setProductTag(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="product-filter"
                  label="{'class': 'class name'}"
                  value={productFilter}
                  onChange={(event) => setProductFilter(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Name Filter</Typography>
                <TextField
                  fullWidth
                  id="name-tag"
                  label="'tag type'"
                  value={nameTag}
                  onChange={(event) => setNameTag(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="name-filter"
                  label="{'class': 'class name'}"
                  value={nameFilter}
                  onChange={(event) => setNameFilter(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Price Filter</Typography>
                <TextField
                  fullWidth
                  id="price-tag"
                  label="'tag type'"
                  value={priceTag}
                  onChange={(event) => setPriceTag(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="price-filter"
                  label="{'class': 'class name'}"
                  value={priceFilter}
                  onChange={(event) => setPriceFilter(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Availability Filter</Typography>
                <TextField
                  fullWidth
                  id="availability-tag"
                  label="'tag type'"
                  value={availabilityTag}
                  onChange={(event) => setAvailabilityTag(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="availability-filter"
                  label="{'class': 'class name'}"
                  value={availabilityFilter}
                  onChange={(event) => setAvailabilityFilter(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">URL Filter</Typography>
                <TextField
                  fullWidth
                  id="url-tag"
                  label="'tag type'"
                  value={urlTag}
                  onChange={(event) => setUrlTag(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="url-filter"
                  label="{'class': 'class name'}"
                  value={urlFilter}
                  onChange={(event) => setUrlFilter(event.target.value)}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
}
export default FormView;