import { useNavigate } from "react-router-dom";

const Contato = () => {
  const navigate = useNavigate();
  const parametro = "Eu sou um Parâmetro";

  const handleClick = () => {
    navigate("/login/" + parametro);
  };

  return (
    <>
      <h1>Contato</h1>
      <button onClick={handleClick}>CLIQUE AQUI</button>
    </>
  );
};

export default Contato;
