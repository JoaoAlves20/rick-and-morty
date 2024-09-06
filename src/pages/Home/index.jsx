import { Link } from "react-router-dom";
import { Container, ContainerLink } from "./styles";

import advance from "../../assets/icons/advance.svg";

export default function Home() {
  return (
    <Container>
      <ContainerLink>
        <Link to="/characters">
          Personagens
        </Link>
        <img src={advance} alt="Advance to Characters" />
      </ContainerLink>
    </Container>
  );
};