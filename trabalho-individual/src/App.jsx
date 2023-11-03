import Login from "./pages/Login";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="text">
      <>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="" element={<Noticias />} />

          <Route path="/home/marcospavao" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
