import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
    base: {
      color: "blue.500",
      textDecoration: "none",
      fontWeight: "bold",
      _hover: {
        color: "blue.700",
        textDecoration: "underline",
      },
      _focus: {
        outline: "none",
        boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.6)",
      },
    },
  });
  