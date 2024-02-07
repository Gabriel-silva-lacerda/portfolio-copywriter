import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const ContainerCertificate = styled(motion.section)`
  background: ${theme.colors.background};
  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    display: inline-block;
    max-width: 600px;
    line-height: 1.4;
  }

  @media (max-width: 1328px) {
    h2 {
      max-width: initial;
    }
  }
`;

export const CertificateContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1328px) {
    justify-content: center;
  }
`;

export const Formations = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 300;
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
    &::before {
      content: "";
      bottom: 0;
      position: absolute;
      background: #40916c;
      width: 100%;
      height: 2px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-size: 1.3rem;
      font-weight: 300;
      list-style: decimal;
      color: ${theme.colors.textColor};
    }
  }

  @media (max-width: 1328px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DownLoadContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.3rem;
    font-weight: 300;
    color: ${theme.colors.textColor};
  }
  a {
    padding: 1rem 1.3rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.7rem;
    background: #40916c;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.3s;

    &:hover {
      background: ${theme.colors.hover};
    }
  }
`;
