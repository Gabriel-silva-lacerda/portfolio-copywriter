import Photo from "../../../assets/photo-perfil.jpeg";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import * as S from "./Styles";

export const About = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <S.AboutSection
      id="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <S.About>
        <S.ImageContainer>
          <img src={Photo} alt="" />
        </S.ImageContainer>
        <S.AboutContainer>
          <S.AboutContent>
            <h2>Sobre mim</h2>
            <p>
              Olá! Meu nome é Larissa Fernandes Bento, tenho 26 anos e sou
              residente de São Paulo, SP. Sou uma profissional formada em
              Marketing com uma paixão por estratégias digitais.
            </p>
            <p>
              Com experiência em planejamento de redes sociais, criação de blogs
              e roteiros para reels, estou sempre buscando maneiras criativas de
              engajar o público online. Além disso, minha formação em Copy e
              especialização em WordPress me capacitam para criar conteúdos
              envolventes e otimizados para websites.
            </p>
            <p>
              Estou animada para compartilhar meu trabalho e contribuir para
              projetos inovadores. Seja bem-vindo ao meu portfólio!
            </p>
          </S.AboutContent>
        </S.AboutContainer>
      </S.About>
    </S.AboutSection>
  );
};
