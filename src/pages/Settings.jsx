import React from "react";
import SideNav from "../components/SideNav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import List from "../components/settinggg/List";

const Settings = ({setUser , user}) => {
  return (
    <>
    {" "}
    <Navbar setUser={setUser} user={user} />
    <Box height={30}/>

    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <List />
      </Box>
    </Box>
  </>
  );
};

export default Settings;
