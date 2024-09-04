export async function fetchCharacters(page) {
  const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  const response = data.json()

  return response
}
