import React from "react";
import { Header } from "./components/header/Index";
import { GlobalStyle } from "./styles/Styles";
import { InitialSection } from "./pages/home/initialSection/Index";
import { About } from "./pages/home/about/Index";
import { Footer } from "./components/footer/Index";
import { Works } from "./pages/home/works/Index";
import { Certificate } from "./pages/home/certificates/Index";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <InitialSection />
        <About />
        <Works />
        <Certificate />
      </main>
      <Footer />
    </>
  );
};
