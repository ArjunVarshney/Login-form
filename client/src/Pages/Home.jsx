import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import CreateBlog from "../Components/CreateBlog";

const Home = ({auth}) => {
  return (
    <Box>
      <Navbar auth={auth}/>
      <Box mt="70px"></Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </Box>
  );
};

export default Home;
