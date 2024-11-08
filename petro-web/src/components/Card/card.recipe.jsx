import { defineRecipe } from "@chakra-ui/react";

export const cardRecipe = defineRecipe({
    base: {
      borderRadius: "0.5em",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1.2em",
      backgroundColor: "white",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      _hover: {
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        transform: "scale(1.03)",
      },
    },
    variants: {
        size: {
            sm: {
                width: "250px",
                fontSize: "1rem",
            },
            md: {
                width: "350px",
                fontSize: "1.125rem",
            },
            lg: {
                width: "450px",
                fontSize: "1.25rem",
            },
        }
    },
  });
  