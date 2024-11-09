import { createSystem, defaultConfig, defineLayerStyles, defineTokens } from "@chakra-ui/react"
  

const tokens = defineTokens({
  colors: {
    primary: { value: "#8A4FFF" },  // Głęboki fiolet - główny kolor
    secondary: { value: "#4E2A84" }, // Ciemny fiolet - pomocniczy kolor
    accent: { value: "#9C6DFF" },    // Jasny fiolet - akcentowy
    background: { value: "#1A1A2E" }, // Tło ciemnoszare
    fg: { value: "#EAEAEA" },        // Kolor tekstu - jasny szary
    muted: { value: "#B0B0B0" },     // Stonowany kolor tekstu
    success: { value: "#28A745" },   // Kolor sukcesu - zielony
    warning: { value: "#FFC107" },   // Kolor ostrzeżenia - żółty
    error: { value: "#DC3545" },     // Kolor błędu - czerwony
    textPrimary: { value: "#EAEAEA" }, // Kolor głównego tekstu - jasny szary
    textSecondary: { value: "#A0A0A0" }, // Kolor tekstu drugorzędnego - szary
    buttonText: { value: "#FFFFFF" }, // Kolor tekstu na przyciskach
  },
  fonts: {
    body: { value: "system-ui, sans-serif" }, // Czcionka główna
    heading: { value: "Georgia, serif" },    // Czcionka nagłówków
    monospace: { value: "'Courier New', monospace" }, // Czcionka monospace
  },
  spacing: {
    xs: { value: "0.25em" },  // 4px
    sm: { value: "0.5em" },   // 8px
    md: { value: "1em" },     // 16px
    lg: { value: "1.5em" },   // 24px
    xl: { value: "2em" },     // 32px
    '2xl': { value: "3em" },  // 48px
  },
  fontSizes: {
    xs: { value: "1rem" },     // 10px
    sm: { value: "1.2rem" },   // 12px
    md: { value: "1.6rem" },   // 16px
    lg: { value: "1.8rem" },   // 18px
    xl: { value: "2rem" },     // 20px
    '2xl': { value: "2.4rem" }, // 24px
    '3xl': { value: "3rem" },  // 30px
    '4xl': { value: "3.6rem" }, // 36px
    '5xl': { value: "4.8rem" }, // 48px
    '6xl': { value: "6rem" },   // 60px
  },
  
  borders: {
    subtle: { value: "1px solid {colors.muted}" },  // Obramowanie subtelne
    danger: { value: "1px solid {colors.error}" },  // Obramowanie dla błędu
    accent: { value: "1px solid {colors.accent}" }, // Obramowanie akcentowe
    thick: { value: "2px dashed {colors.secondary}" }, // Grubsze, przerywane obramowanie
    none: { value: "none" },  // Brak obramowania
  },
  shadows: {
    subtle: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.1)" },
    accent: { value: "0 4px 8px rgba(138, 79, 255, 0.2)" }, // Fioletowy cień
    realistic: {
      value: [
        "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "0 1px 4px 0 rgba(0, 0, 0, 0.1)",
      ],
    },
  },
  
})

export const system = createSystem(defaultConfig, {
  globalCss:{
    "html, body": {
    fontFamily: "system-ui, sans-serif",
    fontSize: "62.5%", // 10px dla roota (gdzie 1rem = 10px)
    margin: 0,
    padding: 0,
    backgroundColor: "#F4F4F4",  // lub inny kolor tła
    color: "#333",  // główny kolor tekstu
  },
  "*":{
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  h1: {
    fontSize: "3.6rem", // 36px
    fontWeight: "bold",
    marginBottom: "1em", // odstęp
  },

  h2: {
    fontSize: "3rem", // 30px
    fontWeight: "bold",
    marginBottom: "1em", // odstęp
  },

  h3: {
    fontSize: "2.4rem", // 24px
    fontWeight: "bold",
    marginBottom: "1em", // odstęp
  },

  h4: {
    fontSize: "2rem", // 20px
    fontWeight: "bold",
    marginBottom: "1em", // odstęp
  },

  h5: {
    fontSize: "1.8rem", // 18px
    fontWeight: "bold",
    marginBottom: "1em", // odstęp
  },

  h6: {
    fontSize: "1.6rem", // 16px
    fontWeight: "bold",
    marginBottom: "1em", // odstęp
  },

  p: {
    fontSize: "1rem",  // 10px
    lineHeight: "1.6", // odpowiednia wysokość linii
    marginBottom: "1.6em", // odstęp między paragrafami
    color: "#666",  // subtelny kolor tekstu
  },

  a: {
    color: "#FF9A00", // kolor linku (w zależności od designu)
    textDecoration: "none", // brak podkreślenia
    _hover: {
      textDecoration: "underline", // podkreślenie po hoverze
    },
  },

  input: {
    padding: "0.8em", // 8px
    borderRadius: "0.4em", // zaokrąglone rogi
    border: "1px solid #CCC", // szare obramowanie
    backgroundColor: "#FFFFFF", // biały kolor tła inputów
    fontSize: "1rem",  // 10px
    color: "#333",  // ciemny kolor tekstu
    _focus: {
      borderColor: "#FF9A00",  // kolor obramowania po kliknięciu
      outline: "none", // brak konturu
    },
  },

  button: {
    padding: "0.8em 1.2em", // 8px góra/dół, 12px lewo/prawo
    borderRadius: "0.4em", // zaokrąglone rogi
    backgroundColor: "#FF9A00",  // kolor przycisku
    color: "#FFF",  // biały tekst
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",  // 10px
    fontWeight: "bold",
    _hover: {
      backgroundColor: "#e68900", // ciemniejszy kolor po hoverze
    },
    _focus: {
      outline: "none", // brak konturu
      boxShadow: "0 0 0 2px #FF9A00", // kontur po kliknięciu
    },
  },

  "button:disabled": {
    backgroundColor: "#CCC", // kolor przycisku po wyłączeniu
    cursor: "not-allowed",
  },
 
  },
    theme: {tokens},
})

