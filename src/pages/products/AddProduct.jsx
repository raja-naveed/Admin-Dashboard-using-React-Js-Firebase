import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Swal from "sweetalert2";
import { rowAppStore } from "../../rowStore";

const currencies = [
  {
    value: "Laptop",
    label: "Laptop",
  },
  {
    value: "Mobile",
    label: "Mobile",
  },
  {
    value: "Accessories",
    label: "Accessories",
  },
  {
    value: "Gaming",
    label: "Gaming",
  },
];

const AddProduct = ({ closeEvent }) => {
  const [name, setName] = useState("");
  const [catogery, setCatogery] = useState("");
  const [price, setPrice] = useState(0);
  const setRows = rowAppStore((state) => state.setRows);
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(2);

  const formattedDate = `${day}-${month}-${year}`;
  console.log(formattedDate);

  const createUser = async () => {
    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const empCollectionRef = collection(db, "products");

    await addDoc(collection(db, "products"), {
      name,
      catogery,
      price,
      date: formattedDate,
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your product has been added.", "success");

  
  };

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
            select
            variant="outlined"
            value={catogery}
            onChange={(e) => setCatogery(e.target.value)}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyExchangeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Button variant="contained" onClick={createUser}>
              Add
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
