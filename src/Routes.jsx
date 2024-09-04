import { Route, Routes } from "react-router-dom"

import Characters from "./pages/Characters"

export default function Router() {
  return (
    <Routes>
      <Route exact path="/characters" Component={Characters} />
    </Routes>
  )
}