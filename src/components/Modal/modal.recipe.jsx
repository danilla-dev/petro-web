import { defineRecipe } from "@chakra-ui/react";

export const modalRecipe = defineRecipe({
    base: {
      borderRadius: "1em",
      padding: "1.6em",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    variants:{
    
        size: {
            sm: {
                width: "300px",
                fontSize: "1rem", // 10px
            },
            md: {
                width: "500px",
                fontSize: "1.2rem", // 12px
            },
            lg: {
                width: "700px",
                fontSize: "1.4rem", // 14px
            },
        },
    }
  });
  