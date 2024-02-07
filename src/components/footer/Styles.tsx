import styled from "styled-components";
import { theme } from "../../theme/Index";
import { motion } from "framer-motion";

export const Footer = styled(motion.footer)`
  background: ${theme.colors.primary};
`;

export const FooterContainer = styled.div`
  max-width: 1600px;
  padding: 3rem 1.5rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  li {
    font-size: 1.2rem;
    color: ${theme.colors.white};
    font-weight: 300;

    &:nth-child(1) {
      font-size: 1.8rem;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.white};
      transition: 0.3s;
      &:hover {
        color: ${theme.colors.lightYeloow};
      }
    }
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 1.8rem;
    color: ${theme.colors.white};
    font-weight: 300;
  }

  div {
    display: flex;
    gap: 0.8rem;

    a {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      svg {
        color: ${theme.colors.white};
        font-size: 1.5rem;
        transition: all 0.3s;

        &:hover {
          color: ${theme.colors.lightYeloow};
        }
      }
    }
  }
`;
