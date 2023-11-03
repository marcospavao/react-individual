import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../image/galinha1.jpeg";
import Logo1 from "../../image/galinhajapa.webp";
const Home = () => {
  const navigate = useNavigate();
  const parametro = "Eu sou um Parâmetro";

  const handleClick = () => {
    navigate("/login/" + parametro);
  };

  return (
    <>
      <h1>Galinha do ovo de ouro</h1>
      <div className="galinha1">
        <img src={Logo} alt="Galinha do ovo de ouro" />
      </div>
      <h1>Galinha Japa</h1>
      <div className="galinha2">
        <img src={Logo1} alt="Galinha japa" />
      </div>
    </>
  );
};

export default Home;
