import { useState } from "react";

const TaskList = () => {
  const [novaTarefa, setNovaTarefa] = useState("");

  //   function cadastrar(){}
  const cadastrar = () => {
    console.log(novaTarefa);
  };

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <section>
        <h2>Cadastre sua tarefa</h2>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={cadastrar}>Cadastrar</button>
      </section>
      <section>
        <h2>Lista de Tarefas</h2>
      </section>
    </main>
  );
};

export default TaskList;
