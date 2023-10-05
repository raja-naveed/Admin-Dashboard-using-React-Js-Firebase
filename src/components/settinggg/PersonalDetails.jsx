// PersonalDetails.js
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

export default function PersonalDetails({user}) {
  console.log('user', user)
  return (
    <Box>
      <Stack spacing={2}>
        <TextField label="Change Password" fullWidth  />
        <TextField label="Change Email" fullWidth />
        <TextField label="Change Name" fullWidth />
      </Stack>
    </Box>
  );
}
