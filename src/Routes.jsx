import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characters";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/characters" Component={Characters} />
    </Routes>
  );
};