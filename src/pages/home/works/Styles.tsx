import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const ContainerWorks = styled(motion.section)`
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  h2 {
    font-size: 2.7rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    &::before {
      content: "";
      bottom: 0;
      position: absolute;
      background: #40916c;
      width: 100%;
      height: 2px;
    }
  }
`;

export const WorksList = styled.ul`
  display: grid;
  display: flex;
  flex-wrap: wrap;

  gap: 2.3rem;

  li {
    transition: all 0.3s;
    flex-grow: 1;
    flex-basis: 300px;
    &:hover {
      scale: 1.02;
    }
    a {
      color: ${theme.colors.textColor};
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;
      img {
        width: 100%;
        height: 250px;
        border-top-right-radius: 0.7rem;
        border-top-left-radius: 0.7rem;
      }

      div {
        background: #dae2dc4e;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:last-child {
          padding: 1rem 1rem;
          border-bottom-right-radius: 0.7rem;
          border-bottom-left-radius: 0.7rem;
          height: 100%;
          p {
            font-weight: 300;
            letter-spacing: 1px;
            line-height: 1.3;
            text-align: justify;
            font-size: 1.1rem;
          }

          button {
            padding: 1rem 0;
            margin-top: 1rem;
            border: none;
            border-radius: 0.7rem;
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            font-size: 1rem;
            text-transform: uppercase;
            transition: all 0.3s;

            &:hover {
              background: ${theme.colors.hover};
            }
          }
        }
      }
    }
  }

  @media (max-width: 1026px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
