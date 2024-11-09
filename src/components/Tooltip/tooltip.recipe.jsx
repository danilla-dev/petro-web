import { defineRecipe } from "@chakra-ui/react";

export const tooltipRecipe = defineRecipe({
    base: {
      padding: "0.4em 0.8em",
      borderRadius: "0.2em",
      fontSize: "0.875rem", // 14px
      backgroundColor: "black",
      color: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.3s ease, visibility 0.3s ease",
    },
    variants: {
        Visual: {

            info: {
                backgroundColor: "blue.500",
            },
            success: {
                backgroundColor: "green.500",
            },
        }
    },
    size: {
      sm: {
        padding: "0.2em 0.6em",
        fontSize: "0.75rem", // 12px
      },
      lg: {
        padding: "0.6em 1em",
        fontSize: "1rem", // 16px
      },
    },
  });
  