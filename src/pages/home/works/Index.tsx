import * as S from "./Styles";
import { data } from "../../../metaData/data";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export const Works = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <S.ContainerWorks
      id="works"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h2>Meus Projetos</h2>
      <S.WorksList>
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.link} target="_blank">
              <div>
                <img src={item.imgUrl} alt="" />
              </div>
              <div>
                <p>{item.texto}</p>
                <button>Saiba mais</button>
              </div>
            </a>
          </li>
        ))}
      </S.WorksList>
    </S.ContainerWorks>
  );
};
