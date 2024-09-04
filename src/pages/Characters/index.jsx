import { useState, useEffect } from "react"

import { fetchCharacters } from "../../services/fetchCharacter"

import Button from "../../components/Button"

import { Container, ContainerButton, Card } from "./styles"
import advance from '../../assets/icons/advance.svg'
import back from '../../assets/icons/back.svg'

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
      <Container>
        {characters.map((character) => (
          <Card key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <span>Status - {character.status}</span>
          </Card>
        ))}
      </Container>
      <ContainerButton>
        <Button 
          functionClick={decreasePage}
          imageSrc={back}
          imageAlt="Back page"
        />
        <Button 
          functionClick={increasePage}
          imageSrc={advance}
          imageAlt="Advance page"
        />
      </ContainerButton>
    </>
  )
}
