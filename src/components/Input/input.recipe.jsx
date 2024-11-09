import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
    base: {
      borderRadius: "0.4em",
      padding: "0.8em 1.2em",
      borderWidth: "1px",
      borderColor: "gray.300",
      fontSize: "1rem", // 10px
      _focus: {
        borderColor: "blue.500",
        boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.5)",
      },
    },
    variants: {
        Visual: {
            filled: {
                bg: "gray.100",
            },
            outline: {
                bg: "transparent",
            },
        },
        size: {
            sm: {
                padding: "0.6em 1em",
                fontSize: "0.875rem", // 14px
            },
            lg: {
                padding: "1em 1.6em",
                fontSize: "1.125rem", // 18px
            },
        },
    },
  });
  