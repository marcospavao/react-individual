export default function Botao({ title }) {
  function mensagem() {
    {
      /* formas diferentes de concatenar  */
    }
    console.log("eu sou o botao", title);
    /* console.log("eu sou o botao", +title);*/
  }

  return (
    <button onClick={mensagem} style={{ marginRight: 10, padding: 15 }}>
      {title}
    </button>
  );
}
