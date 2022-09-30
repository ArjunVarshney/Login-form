import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box mt="70px"></Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Box>
  );
};

export default Home;
