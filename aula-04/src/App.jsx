import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Nao encontrado!!!</h1>} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
