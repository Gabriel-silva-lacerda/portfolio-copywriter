import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import * as S from "./Styles";

export const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <S.Header active={active}>
      <S.HeaderContainer>
        <S.Links>
          {" "}
          <a
            href="https://wa.me/5511952331104"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/laariofc?igsh=aGh2ODhsc2c5dWpj&utm_source=qr"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </S.Links>
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
