import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.4em", // Zaokrąglone rogi
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease", // Animacja przejścia
    _focus: {
      outline: "none", // Brak konturu
      boxShadow: "0 0 0 2px #FF9A00", // Kontur przy fokusu
    },
  },
  variants: {
    visual: {
      solid: {
        bg: "#FF9A00", // Kolor tła
        color: "white", // Kolor tekstu
        _hover: {
          bg: "#e68900", // Kolor tła przy hoverze
        },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "#FF9A00", // Kolor obramowania
        color: "#FF9A00", // Kolor tekstu
        _hover: {
          bg: "#FF9A00", // Kolor tła przy hoverze
          color: "white", // Kolor tekstu przy hoverze
        },
      },
    },
    size: {
      sm: {
        padding: "0.8em 1.2em", // 8px góra/dół, 12px lewo/prawo
        fontSize: "1rem", // 10px
      },
      md: {
        padding: "1em 1.6em", // 10px góra/dół, 16px lewo/prawo
        fontSize: "1.2rem", // 12px
      },
      lg: {
        padding: "1.2em 2em", // 12px góra/dół, 20px lewo/prawo
        fontSize: "1.6rem", // 16px
      },
    },
  },
});
