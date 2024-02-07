import { useRef } from "react";
import { motion } from "framer-motion";
import * as S from "./Styles";

export const InitialSection = () => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <S.InitialHomeSection id="home" ref={ref}>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Larissa Fernandes Bento, Profissional formada em Marketing com uma
        paixão por estratégias digitais
      </motion.h2>
      <S.List
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#works">Meus Projetos</a>
        </li>
        <li>
          <a href="#formation">Formações</a>
        </li>
        <li>
          <a href="#contact">Contate-me</a>
        </li>
      </S.List>
      <S.FeaturedImage
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      ></S.FeaturedImage>
    </S.InitialHomeSection>
  );
};
