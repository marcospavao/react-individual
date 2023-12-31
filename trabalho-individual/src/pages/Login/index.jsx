import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
const dados = {
  login: "marcospavao",
  senha: "123",
};

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  console.log(parametro);

  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      console.log("Preencha os campo de login e senha");
    } else if (login == dados.login && senha == dados.senha) {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);

      localStorage.setItem("info", JSON.stringify(info));

      setLogin("");
      setSenha("");

      navigate("/home/" + login);
    } else {
      alert("Login ou Senha Inválidos!");
    }
  };

  return (
    <>
      <div className="Login">
        <h1>FaceBug</h1>

        <form>
          <input
            type="text"
            placeholder="Digite Seu User"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Digite Sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
          <button type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
