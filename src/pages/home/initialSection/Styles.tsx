import styled from "styled-components";
import BackGround01 from "../../../assets/about-me.png";
import BackGround02 from "../../../assets/work.png";

import BackGround03 from "../../../assets/formation.png";
import BackGround04 from "../../../assets/group02.png";
import BackGround05 from "../../../assets/group.png";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const InitialHomeSection = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 1.5rem 3rem 1.5rem;

  h2 {
    font-size: 3.2rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  margin-top: 4rem;
  li {
    transition: all 0.3s;
    position: relative;
    border-radius: 0.7rem;
    flex-grow: 1;
    flex-basis: 300px;
    &:nth-child(1) {
      background: no-repeat url(${BackGround01});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &:nth-child(2) {
      background: no-repeat url(${BackGround02});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &:nth-child(3) {
      background: no-repeat url(${BackGround03});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &:nth-child(4) {
      background: no-repeat url(${BackGround04});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
    }

    &:hover {
      scale: 1.03;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 600px;
      color: ${theme.colors.textColorTwo};
      font-size: 2.1rem;
      padding: 0 2rem;
    }
  }

  @media (max-width: 1026px) {
    gap: 2rem;
  }
`;

export const FeaturedImage = styled(motion.div)`
  margin-top: 3rem;
  background: no-repeat url(${BackGround05});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 700px;
  border-radius: 0.7rem;

  @media (max-width: 614px) {
    display: none;
  }
`;
