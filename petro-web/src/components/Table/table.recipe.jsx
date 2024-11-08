import { defineRecipe } from "@chakra-ui/react";

export const tableRecipe = defineRecipe({
    base: {
      padding: "1em",
      fontWeight: "bold",
      borderRadius: "0.4em",
      cursor: "pointer",
    },
    variants: {
        Visual: {

            active: {
                bg: "blue.500",
                color: "white",
            },
            inactive: {
                bg: "gray.200",
                color: "gray.600",
                _hover: {
                    bg: "gray.300",
                },
            },
        },
      size: {
          sm: {
              fontSize: "0.875rem", // 14px
              padding: "0.6em 1em",
            },
            md: {
                fontSize: "1rem", // 10px
                padding: "0.8em 1.2em",
            },
            lg: {
                fontSize: "1.125rem", // 12px
                padding: "1em 1.6em",
            },
        },
    },
  });
  