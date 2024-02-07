import * as S from "./Styles";
import { FaFilePdf } from "react-icons/fa";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export const Certificate = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <S.ContainerCertificate
      id="formation"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <S.CertificateContent>
        <div>
          <h2>
            Bem-vindo à seção dedicada às minhas formações, onde compartilho
            minha jornada educacional e as habilidades adquiridas ao longo do
            tempo.
          </h2>
        </div>
        <S.Formations>
          <h2>Formações</h2>
          <ul>
            <li>
              Graduação em Tecnologia de Marketing, Universidade Nove de Julho
            </li>
            <li> Copywiter - Palavras Lucrativas</li>
            <li>Copywiter Descomplicado - Victor Palandi</li>
            <li>Google Ads - Máquina de Tráfego e Conversão</li>
            <li>Word Press - Escola Word Press</li>
            <li>Estratégias de SEO - Udemy</li>
          </ul>
        </S.Formations>
      </S.CertificateContent>
      <S.DownLoadContainer>
        <p>
          Por favor, clique no botão abaixo para iniciar o download e ter acesso
          ao meu currículo:
        </p>
        <a href="/caminho/do/arquivo/arquivo.txt" download>
          Currículo <FaFilePdf />
        </a>
      </S.DownLoadContainer>
    </S.ContainerCertificate>
  );
};
