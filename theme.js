import { extendTheme, theme } from "@chakra-ui/react";
export default extendTheme({
  styles: {
    global: {
      "html,body": { color: "gray.600", fontSIze: "lg" },
    },
  },
  colors: {
    primary: {
      100: "#BFF846",
      200: "#EAF0DF",
    },
  },
});
