import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const AboutSection = styled(motion.section)`
  background: #dae2dc4e;
  padding: 3rem 0;
`;

export const About = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0rem 1.5rem;

  display: flex;

  gap: 20px;

  @media (max-width: 1026px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  img {
    max-width: 650px;
    height: 100%;
  }

  @media (max-width: 1100px) {
    img {
      max-width: 550px;
      height: 600px;
      width: 100%;
    }
  }

  @media (max-width: 578px) {
    img {
      display: none;
    }
  }
`;

export const AboutContainer = styled.div`
  text-align: right;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 1026px) {
    align-items: start;
    text-align: initial;
  }
`;

export const AboutContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: end;
  h2 {
    font-size: 2.7rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    margin-top: 4rem;
    position: relative;

    &::before {
      content: "";
      bottom: 0;
      position: absolute;
      background: ${theme.colors.primary};
      width: 100%;
      height: 2px;
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.3;
    color: ${theme.colors.textColor};
    &:nth-child(3) {
      margin: 2rem 0;
    }
  }

  @media (max-width: 1026px) {
    align-items: start;
    max-width: initial;

    h2 {
      margin-top: 0;
    }
  }
`;
