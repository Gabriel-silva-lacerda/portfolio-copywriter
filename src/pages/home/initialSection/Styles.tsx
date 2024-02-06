import styled from "styled-components";
import BackGround01 from "../../../assets/about-me.png";
import BackGround02 from "../../../assets/work.png";
import BackGround03 from "../../../assets/contact.jpg";
import BackGround04 from "../../../assets/group.png";
import { theme } from "../../../theme/Index";

export const InitialHomeSection = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  h2 {
    font-size: 3.2rem;
    font-weight: 300;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.4rem;

  margin-top: 4rem;
  li {
    transition: all 0.3s;

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
    }
  }
`;

export const FeaturedImage = styled.div`
  margin-top: 3rem;
  background: no-repeat url(${BackGround04});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 700px;
`;
