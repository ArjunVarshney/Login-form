import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Banner = (props) => {
  const Img = styled(Box)`
    background: url(${props.img}) center/cover repeat-x;
    width: 80%;
    height: 70vh;
    margin: auto;
    margin-top: 80px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.3),
      100px 0 100px 1px rgb(0, 0, 0, 0.7) inset;
    display: flex;
    flex-direction: column;
    padding: 70px;
    box-sizing: border-box;
  `;

  const BannerHead = styled(Box)`
    color: white;
    width: 90%;
    background-color: rgb(0, 0, 0, 0.6);
    padding: 15px;
    margin:0
  `;

  const BannerPost = styled(Box)`
    color: white;
    width: 90%;
    background-color: rgb(0, 0, 0, 0.6);
    padding: 15px;
  `;

  return (
    <Box>
      <Img>
        <BannerHead component="h1">{props.title}</BannerHead>
        <BannerPost>
          <Typography>{props.subtitle}</Typography>
        </BannerPost>
        <BannerPost>
          <Typography>{props.post}</Typography>
        </BannerPost>
      </Img>
    </Box>
  );
};

export default Banner;
