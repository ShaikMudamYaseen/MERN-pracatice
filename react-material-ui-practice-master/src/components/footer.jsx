import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0d47a1",
        flexGrow: 1,
        color: "white",
        borderRadius: "10px",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Footer</Typography>
      <Typography variant="subtitle1">
        Here we can write the purpose of the footer
      </Typography>
      <Typography variant="subtitle2">copyright&copy; 2022</Typography>
    </Box>
  );
}
