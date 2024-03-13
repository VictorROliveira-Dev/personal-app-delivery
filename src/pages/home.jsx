import { useContext, useState } from "react";
import BotoesFiltro from "../components/BotoesFiltro/botoesFiltro";
import Navbar from "../components/Navbar/navbar";
import ProdutoVitrine from "../components/ProdutosVitrine/produtosVitrine";
import { produtos } from "../dados";

import "./style.css";
import { CartContext } from "../contexts/cart-context";

export default function Home() {
  const [filtro, setFiltro] = useState(null);
  const { cartItems } = useContext(CartContext);

  const cartQuantidadeItems = cartItems.reduce((total, produto) => total + produto.qtd, 0);

  const produtosFiltrados = produtos.filter((produto) => {
    if (!filtro) return true;
    return produto.categoria === filtro;
  })

  return (
    <>
      <Navbar itemsCount={cartQuantidadeItems}/>
      <BotoesFiltro setFiltro={setFiltro}/>

      <div className="container-home">
        <div className="texto-home">
          <h1>Nosso Cardápio:</h1>
          <p className="subtitulo-home">
            Escolha seus itens e adicione-os no carrinho!
          </p>
        </div>
      </div>

      <div className="content-produtos">
        {produtosFiltrados.map((prod) => {
          return (
            <ProdutoVitrine
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              foto={prod.foto}
              categoria={prod.categoria}
            />
          );
        })}
      </div>
    </>
  );
}
