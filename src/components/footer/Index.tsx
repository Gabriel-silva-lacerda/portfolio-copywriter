import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import * as S from "./Styles";

export const Footer = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <S.Footer
      id="contact"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <S.FooterContainer>
        <S.FooterList>
          <li>Larissa Fernandes</li>
          <li>Todos os direitos reservados</li>
          <li>
            Desenvolvido por <a href="#">Gabriel Silva</a>
          </li>
        </S.FooterList>
        <S.FooterContact>
          <span>Contate-me</span>
          <div>
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
          </div>
        </S.FooterContact>
      </S.FooterContainer>
    </S.Footer>
  );
};
