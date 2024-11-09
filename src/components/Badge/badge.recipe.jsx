import { defineRecipe } from "@chakra-ui/react";
export const badgeRecipe = defineRecipe({
    base: {
      borderRadius: "1em",
      padding: "0.4em 0.8em",
      fontSize: "0.875rem", // 14px
      fontWeight: "bold",
      display: "inline-block",
    },
    variants: {
        visual: {
            success: {
                bg: "green.200",
                color: "white",
            },
            error: {
                bg: "red.200",
                color: "white",
            },
            info: {
                bg: "blue.200",
                color: "white",
            },
        }
    },
  });
  