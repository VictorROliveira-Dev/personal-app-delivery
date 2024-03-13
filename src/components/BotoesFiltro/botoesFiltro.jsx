import { useState } from "react";
import "./botoesFiltro.css";

function BotoesFiltro({ setFiltro }) {
  const [filtroAtivo, setFiltroAtivo] = useState(null);

  const handleFiltro = (categoria) => {
    if (filtroAtivo === categoria) {
      // Se o filtro clicado for igual ao filtro ativo, remove o filtro
      setFiltro(null);
      setFiltroAtivo(null);
    } else {
      // Caso contrário, define o novo filtro
      setFiltro(categoria);
      setFiltroAtivo(categoria);
    }
  };

  return (
    <div className="container-buttons-filtro">
      <button
        className={`button-filtro ${filtroAtivo === null ? "ativo" : ""}`}
        onClick={() => handleFiltro(null)}
      >
        <i class="fa-solid fa-bars"></i>
        Todos
      </button>
      <button
        className={`button-filtro ${filtroAtivo === 'Hamburguer' ? "ativo" : ""}`}
        onClick={() => handleFiltro("Hamburguer")}
      >
        <i class="fa-solid fa-burger"></i>
        Hambúrgueres
      </button>
      <button
        className={`button-filtro ${filtroAtivo === 'Sanduiches' ? "ativo" : ""}`}
        onClick={() => handleFiltro("Sanduiches")}
      >
        <i class="fa-solid fa-bread-slice"></i>
        Sanduíches
      </button>
      <button
        className={`button-filtro ${filtroAtivo === 'Massas' ? "ativo" : ""}`}
        onClick={() => handleFiltro("Massas")}
      >
        <i class="fa-solid fa-utensils"></i>
        Massas
      </button>
      <button
        className={`button-filtro ${filtroAtivo === 'Bebidas' ? "ativo" : ""}`}
        onClick={() => handleFiltro('Bebidas')}
      >
        <i class="fa-solid fa-whiskey-glass"></i>
        Bebidas
      </button>
      <button
        className={`button-filtro ${filtroAtivo === 'Acompanhamentos' ? 'ativo' : ''}`}
        onClick={() => handleFiltro('Acompanhamentos')}
      >
        <i class="fa-solid fa-drumstick-bite"></i>
        Acompanhamentos
      </button>
    </div>
  );
}

export default BotoesFiltro;
