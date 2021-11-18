import React from "react";
import { render } from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { SearchContextProvider } from "./components/search/SearchContextProvider";

import "./index.css";
import theme from "./theme";
import reportWebVitals from "./reportWebVitals";

render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
