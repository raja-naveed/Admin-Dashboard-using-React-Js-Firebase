import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const AddProduct = ({ closeEvent }) => {
  const [name, setName] = useState("");
  const [catogery, setCatogery] = useState("");
  const [price, setPrice] = useState(0);

  const createUser = async () => {
    
  }

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ m: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Catogery"
            variant="outlined"
            value={catogery}
            onChange={(e) => setCatogery(e.target.value)}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Button variant="contained" onClick= {createUser}>
              Add
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
