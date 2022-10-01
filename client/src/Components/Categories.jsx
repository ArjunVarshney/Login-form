import { Box, Button, styled } from "@mui/material";
import React from "react";
import { categories } from "../constants/data";

const Categories = () => {
  const CategoryBox = styled(Box)`
    width: 80%;
    margin: auto;
    margin-top: 20px;
  `;

  const CategoryButton = styled(Button)`
    margin-right: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  `;

  return (
    <CategoryBox mt={2}>
      {categories.map((category) => (
        <CategoryButton key={category.id} variant="outlined">
          {category.type}
        </CategoryButton>
      ))}
    </CategoryBox>
  );
};

export default Categories;
