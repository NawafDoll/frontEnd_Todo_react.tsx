import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react";
import "../src/Component/app.css";
import Create from "./Component/Create";
import Router from "./Component/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);
