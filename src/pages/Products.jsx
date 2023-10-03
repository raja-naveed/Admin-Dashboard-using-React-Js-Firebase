import React from "react";
import SideNav from "../components/SideNav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import ProductList from "./products/ProductList";

const Products = ({setUser, user}) => {
  return (
    <>
    <div className="bgcolor">
    {" "}
    <Navbar setUser={setUser} user={user} />
    <Box height={70}/>

    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ProductList />
      </Box>
    </Box>
    </div>
  </>
  );
};

export default Products;
