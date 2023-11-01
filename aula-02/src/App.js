import "./App.css";
import Bio from "./components/Bio";
import Botao from "./components/Botao";
function App() {
  const pessoas = [
    { nome: "joao", idade: 22 },
    { nome: "joao rodrigo", idade: 42 },
    { nome: "joao jao", idade: 12 },
  ];

  const titulos = [
    { titulo: "Editar" },
    { titulo: "salvar" },
    { titulo: "apagar" },
  ];

  for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
  }

  pessoas.forEach((item) => {});

  return (
    <div className="App">
      <h1>Aula 02</h1>

      {pessoas.map((item, index) => (
        <Bio key={index} nome={item.nome} idade={item.idade} />
      ))}

      {titulos.map((titulo, index) => (
        <Botao key={index} title={titulo.titulo} />
      ))}
    </div>
  );
}

export default App;
