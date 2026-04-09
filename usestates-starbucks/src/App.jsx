import { useState } from 'react'
import './App.css'

export default function App() {

  const CATEGORIAS = [
    { nome: "Cafés", emoji: "☕" },
    { nome: "Bebidas Geladas", emoji: "🧋" },
    { nome: "Comidas", emoji: "🥐" },
    { nome: "Sobremesas", emoji: "🍰" },
  ];

  const [cliente, setCliente] = useState("");
  const [total, setTotal] = useState(0);
  const [aberto, setAberto] = useState(true);
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);

  const adicionar = () => {
    setTotal(total + 10);
  }

  const resetar = () => {
    setTotal(0);
    setAberto(true);
  }

  const fecharLoja = () => {
    setAberto(false);
  }

  const pct = total / 100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";

  return (
    <>
      <main>
        <h1 className="Titulo">Starbucks ☕</h1>

        <div id="icon">{aberto ? categoria.emoji : "🚫"}</div>

        <input
          type="text"
          placeholder="Nome do Cliente"
          maxLength={20}
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <div id="status">
          <h2>Status</h2>
          <h2>Loja Aberta (Boolean)</h2>
          <p>{aberto ? "ABERTA" : "FECHADA"}</p>
          <p>{aberto ? "true" : "false"}</p>
        </div>

        <p id="total">
          Total da Compra <span>R$ {total}</span>
        </p>

        <div id="barraVida" style={{ background: corBarra }}></div>

        <button
          className="produto"
          onClick={adicionar}
          disabled={!aberto}
        >
          🛒 Adicionar Produto
        </button>

        <button
          className="produto"
          onClick={resetar}
        >
          🔄 Resetar
        </button>

        <button
          className="produto"
          onClick={fecharLoja}
        >
          🚫 Fechar Loja
        </button>

        <p id="categorias">Categorias</p>

        <button className="opçoes" onClick={() => setCategoria(CATEGORIAS[0])}>
          ☕ Cafés
        </button>

        <button className="opçoes" onClick={() => setCategoria(CATEGORIAS[1])}>
          🧋 Bebidas
        </button>

        <button className="opçoes" onClick={() => setCategoria(CATEGORIAS[2])}>
          🥐 Comidas
        </button>

        <button className="opçoes" onClick={() => setCategoria(CATEGORIAS[3])}>
          🍰 Sobremesas
        </button>

      </main>
    </>
  )
}