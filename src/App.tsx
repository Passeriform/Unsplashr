import { ChakraProvider } from "@chakra-ui/react";

import { Banner } from "@components/banner/Banner";
import { Board } from "@components/board/Board";
import { Header } from "@components/header/Header";
import theme from "@theme";

import "./App.scss";

const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Banner />
    <Board />
  </ChakraProvider>
);

export default App;
