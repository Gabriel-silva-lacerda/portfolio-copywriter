import styled from "styled-components";
import { theme } from "../../theme/Index";

export const Header = styled.header<{ active: boolean }>`
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 3px solid ${theme.colors.primary};
  background: ${theme.colors.white};
`;

export const HeaderContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;

  padding: 0.8rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    font-size: 1.7rem;
    font-weight: 300;
    position: relative;
    &::before {
      content: "";
      bottom: 0;
      position: absolute;
      width: 20%;
      background: ${theme.colors.primary};
      height: 2px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    background: ${theme.colors.primary};
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &:hover {
      background: ${theme.colors.hover};
    }

    svg {
      color: ${theme.colors.white};
      font-size: 1.2rem;
    }
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    &.active .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      height: 100vh;
      visibility: visible;
      transition: all 0.6s;

      transform: translate(0px);
      animation: animeLeft 0.3s forwards;

      @keyframes animeLeft {
        to {
          opacity: initial;
        }
      }
    }

    &.active {
      span {
        border-top-color: transparent;

        &::before {
          transform: rotate(135deg);
        }
        &::after {
          transform: rotate(-135deg);
          top: -7px;
        }
      }
    }

    &.active {
      a {
        color: ${theme.colors.white};
        font-weight: 400;
        font-size: 1.5rem;
      }
    }
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  height: 0;
  transition: all 0.6s;

  li {
    position: relative;
    padding-top: 0.1rem;

    &::after {
      content: "";
      width: 0px;
      display: block;
      height: 2px;
      background-color: ${theme.colors.primary};
      bottom: -3px;
      left: 0px;
      position: absolute;
      transition: 0.4s;
    }

    &:hover::after {
      width: 100%;
    }

    a {
      padding: 0.2rem;
      color: ${theme.colors.textColor};
      font-size: 1.3rem;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0px;
    /* background: rgba(83, 83, 83, 0.5); */
    background: rgba(24, 23, 23, 0.5);
    height: 0;
    transition: all 0.6s;

    visibility: hidden;

    transform: translate(-20px);
    opacity: 0;
    z-index: -1;
  }
`;

export const MobileMenu = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    background: none;
    border: none;
    cursor: pointer;

    span {
      border-top: 2px solid ${theme.colors.primary};
      width: 20px;
      display: block;

      &::after,
      &::before {
        content: "";
        display: block;
        margin-top: 5px;
        width: 20px;
        height: 2px;
        background: ${theme.colors.primary};
        position: relative;
        transition: all 0.5s;
      }
    }
  }
`;
