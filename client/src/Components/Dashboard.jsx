import React from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";

const Dashboard = () => {
  const fimg = `https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
  const ftitle = "Title";
  const fsubtitle = "This is the subTitle..."
  const fPost =
    "This is the post that is to be appended in the featured postmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popul";

  return (
    <Box>
      <Banner img={fimg} title={ftitle} post={fPost} subtitle = {fsubtitle}/>
    </Box>
  );
};

export default Dashboard;
