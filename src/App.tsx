import React from "react";
import { Header } from "./components/header/Index";
import { GlobalStyle } from "./styles/Styles";
import { InitialSection } from "./pages/home/initialSection/Index";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <InitialSection />
    </>
  );
};
