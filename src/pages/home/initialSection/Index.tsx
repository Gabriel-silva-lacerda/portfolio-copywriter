import React from "react";
import * as S from "./Styles";

export const InitialSection = () => {
  return (
    <S.InitialHomeSection>
      <h2>
        Larissa Fernandes Bento, Profissional formada em Marketing com uma
        paixão por estratégias digitais
      </h2>
      <S.List>
        <li>
          <a href="">Sobre mim</a>
        </li>
        <li>
          <a href="">Meus Projetos</a>
        </li>
        <li>
          <a href="">Contate-me</a>
        </li>
      </S.List>
      <S.FeaturedImage></S.FeaturedImage>
    </S.InitialHomeSection>
  );
};
