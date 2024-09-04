import { useState, useEffect } from "react"

import { fetchCharacters } from "../../services/fetchCharacter"

import ContainerButtons from '../../components/ContainerButton'

import { Container, Card } from "./styles"

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  function increasePage() {
    const newPage = page + 1
    setPage(newPage)
  }

  function decreasePage() {
    const newPage = page - 1
    setPage(newPage)
  }

  useEffect(() => {
    const request = async () => {
      const { results } = await fetchCharacters(page)
      setCharacters(results)
    }

    request()
  }, [page])

  return (
    <>
      <ContainerButtons 
        functionClickDecrease={decreasePage}
        functionClickIncrease={increasePage}
      />
      <Container>
        {characters.map((character) => (
          <Card
            key={character.id}
            className={character.status}
          >
            <img 
              src={character.image} 
              alt={character.name}
            />
            <h3>{character.name}</h3>
            <span>Status: {character.status}</span>
            <span>Species: {character.species}</span>
            <span><strong>Gender:</strong> {character.gender}</span>
          </Card>
        ))}
      </Container>
      <ContainerButtons 
        functionClickDecrease={decreasePage}
        functionClickIncrease={increasePage}
      />
    </>
  )
}
