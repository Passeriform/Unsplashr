import { ChakraProvider } from "@chakra-ui/react"
import { Header } from "@components/header/Header"
import { Banner } from "@components/banner/Banner"
import { Board } from "@components/board/Board"
import theme from "@theme"
import './App.scss';

const App = () =>
    <ChakraProvider theme={theme}>
      <Header />
      <Banner />
      <Board />
    </ChakraProvider>

export default App;
