import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchCharacters } from "../../services/fetchCharacter";

import advance from "../../assets/icons/advance.svg";
import back from "../../assets/icons/back.svg";

import { ContainerLink, ContainerCard, ContainerButton, Card } from "./styles";
import Button from "../../components/Button";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  function increasePage() {
    const newPage = page + 1;
    setPage(newPage);
  };

  function decreasePage() {
    const newPage = page - 1;
    setPage(newPage);
  };

  useEffect(() => {
    const request = async () => {
      const { results } = await fetchCharacters(page);
      setCharacters(results);
    };

    request();
  }, [page]);

  return (
    <>
      <ContainerLink>
        <img src={back} alt="Back to Home" />
        <Link to="/">
          Voltar
        </Link>
      </ContainerLink>
      <ContainerButton>
        <Button onClick={decreasePage}>
          <img src={back} alt="Back page" />
        </Button>
        <Button onClick={increasePage}>
          <img src={advance} alt="Advance page" />
        </Button>
      </ContainerButton>
      
      <ContainerCard>
        {characters.map((character) => (
          <Card
            key={character.id}
          >
            <img 
              src={character.image} 
              alt={character.name}
              className={character.status}
            />
            <h3>{character.name}</h3>
            <span><strong>Status:</strong> {character.status}</span>
            <span><strong>Species:</strong> {character.species}</span>
            <span><strong>Gender:</strong> {character.gender}</span>
          </Card>
        ))}
      </ContainerCard>

      <ContainerButton>
        <Button onClick={decreasePage}>
          <img src={back} alt="Back page" />
        </Button>
        <Button onClick={increasePage}>
          <img src={advance} alt="Advance page" />
        </Button>
      </ContainerButton>
    </>
  );
};
