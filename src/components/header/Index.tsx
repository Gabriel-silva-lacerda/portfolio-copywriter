import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

import * as S from "./Styles";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const targetInnerHeightPercentage = 85;

      const targetInnerHeight =
        (targetInnerHeightPercentage / 100) * screenHeight;

      const isScrolled = window.scrollY > targetInnerHeight;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header scrolled={scrolled} active={active}>
      <S.HeaderContainer>
        <S.Logo href="home">
          {" "}
          <FaLinkedinIn />
        </S.Logo>
        <h1>Larissa Fernandes</h1>
        <S.Nav className={active ? "active" : ""}>
          <S.MobileMenu
            onClick={() => setActive((boolean) => !boolean)}
            className="mobileMenu"
          >
            <span></span>
          </S.MobileMenu>
          <S.HeaderList className="menu" onClick={() => setActive(false)}>
            <li>
              <a href="#home">Home</a>
            </li>
          </S.HeaderList>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
};
