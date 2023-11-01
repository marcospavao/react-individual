import "./style.css";
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  function somar() {
    setCount(count + 1);
    console.log("Contador: ", count);
  }
  return (
    <div className="container">
      <h1>CONTADOR</h1>
      <p className="contador">{count}</p>

      <button onClick={somar}> Adicionar +1</button>
    </div>
  );
}

export default Contador;
