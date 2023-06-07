import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    brand: {
      50: "#f9fafb",
      100: "#f0f1f3",
      200: "#d9dbdf",
      300: "#bdc0c7",
      400: "#8c9099",
      500: "#5c606f",
      600: "#3b3f4d",
      700: "#282c3b",
      800: "#161823",
      900: "#0b0c15",
    },
  },
  components: {
    Modal: {
      baseStyle: {
        content: {
          bg: "brand.800",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.800",
        color: "white",
      },
    },
  },
});
