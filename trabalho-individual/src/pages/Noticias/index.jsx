import React from "react";
import { useNavigate } from "react-router-dom";
import noticia1 from "../../image/noticia1.jpeg";
import noticia2 from "../../image/noticia2.jpeg";
import noticia3 from "../../image/noticia3.jpeg";

const Noticias = () => {
  const navigate = useNavigate();
  const parametro = "Eu sou um Parâmetro";

  const handleClick = () => {
    navigate("/login/" + parametro);
  };

  return (
    <>
      <h1>Noticias Quentes</h1>

      <img src={noticia1} alt="noticias" />
      <br></br>
      <br></br>
      <img src={noticia2} alt="noticias" />
      <br></br>
      <br></br>

      <img src={noticia3} alt="noticias" />
    </>
  );
};

export default Noticias;
