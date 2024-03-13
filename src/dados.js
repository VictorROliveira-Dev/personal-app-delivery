const produtos = [
  {
    id: 1,
    nome: "Mega Bur-Bacon",
    descricao: "Hambúrguer de 250g, queijo, bacon, queijo cheddar, tomate, alface e cebola.",
    preco: 24.9,
    foto: "https://th.bing.com/th/id/OIG3.1F1dSEA.YtDTZWiju0tT?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Hamburguer"
  },
  {
    id: 2,
    nome: "Hambúrgão",
    descricao: "Blend 180g, molho de barbecue caseiro, cebola roxa, queijo cheddar, picles, alface e tomate.",
    preco: 35.9,
    foto: "https://th.bing.com/th/id/OIG3.0mYHjKaW0znbc8t4g47T?pid=ImgGn",
    categoria: "Hamburguer"
  },
  {
    id: 3,
    nome: "Sanduba",
    descricao: "Sanduíche natural, peito de peru, queijo, alface, tomate, pão integral e orégano.",
    preco: 14.0,
    foto: "https://th.bing.com/th/id/OIG3.KmlvCpITXt2R2hA48pE6?pid=ImgGn",
    categoria: "Sanduiches"
  },
  {
    id: 4,
    nome: "Burguer-Bacon",
    descricao: "Hambúrguer de 180g, maionese da casa, queijo prato, bacon, tomate e alface.",
    preco: 29.9,
    foto: "https://th.bing.com/th/id/OIG1.KVqPr8gHbGiWOCHX5fx9?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Hamburguer"
  },
  {
    id: 5,
    nome: "Mega Smash",
    descricao: "2 hambúrgueres de 110g, maionese da casa, queijo prato, tomate, alface e cebola roxa.",
    preco: 27.9,
    foto: "https://th.bing.com/th/id/OIG1.CdL63lcHM9QMkk8mgfnB?pid=ImgGn",
    categoria: "Hamburguer"
  },
  {
    id: 6,
    nome: "Parafuso",
    descricao:
      "Macarrão parafuso ao molho especial de tomates rústicos, ervas aromáticas e cebola.",
    preco: 20.0,
    foto: "https://ingredient-generation-generated-ingredients.canva.com/20491d53-1f1d-4a80-85e2-80c988ed48bc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHQLRPZXQM%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240311T191337Z&X-Amz-Expires=161957&X-Amz-Signature=cfc4b798e98e18e032c04e28dd5509ac3a66e18444e1bad864f60a8ee58d56a6&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2013%20Mar%202024%2016%3A12%3A54%20GMT",
    categoria: "Massas"
  },
  {
    id: 7,
    nome: "Fritas da Casa",
    descricao: "Batata frita crocante com molho especial da casa.",
    preco: 16.9,
    foto: "https://th.bing.com/th/id/OIG4.RXLyWy1TPMB2y0.ThaOE?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Acompanhamentos"
  },
  {
    id: 8,
    nome: "Coca-Cola Lata",
    descricao: "Coca-Cola em lata de 350ml.",
    preco: 8.9,
    foto: "https://i.pinimg.com/originals/ae/2d/65/ae2d65d73a98f127fdc0b320b2482c8b.png",
    categoria: "Bebidas"
  },
  {
    id: 9,
    nome: "SanduParma",
    descricao: "Sanduíche com pão artesanal, presunto parma, alface, tomate e molho especial.",
    preco: 20.9,
    foto: "https://ingredient-generation-generated-ingredients.canva.com/e811f3f2-635b-41f5-98c1-bdb16f00a75b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHQLRPZXQM%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240311T205200Z&X-Amz-Expires=152764&X-Amz-Signature=a58a4f39a1b3f5e8a1ffb390d604a541d6d538342797154a18cae4d1cdbab0b1&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2013%20Mar%202024%2015%3A18%3A04%20GMT",
    categoria: "Sanduiches"
  },
  {
    id: 10,
    nome: "Suco de Laranja",
    descricao: "Suco de laranha natural.",
    preco: 10.9,
    foto: "https://ingredient-generation-generated-ingredients.canva.com/c1c669e7-48ea-466b-aabd-cf02d5c46d85?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHQLRPZXQM%2F20240312%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240312T065054Z&X-Amz-Expires=118102&X-Amz-Signature=62aff2a7c602f8a89dc8a1d1e1a6e3911a29af2e9bfbfeedd32a68d5e13ffccd&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2013%20Mar%202024%2015%3A39%3A16%20GMT",
    categoria: "Bebidas"
  },
  {
    id: 11,
    nome: "Sanduba Chicken",
    descricao: "Sanduíche de frango desfiado bem temperado, alface, picles e tomate.",
    preco: 16.8,
    foto: "https://th.bing.com/th/id/OIG4.X1PBKNTdQHThp5w1yCkx?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Sanduiches"
  },
  {
    id: 12,
    nome: "Carbonara",
    descricao: "Delicioso prato de carbonara.",
    preco: 28.0,
    foto: "https://th.bing.com/th/id/OIG4.G.alF0g3aBElwl2cToo9?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Massas"
  },
  {
    id: 13,
    nome: "Lemon Juice",
    descricao: "Suco de limão natural.",
    preco: 7.9,
    foto: "https://th.bing.com/th/id/OIG4.uIWfW99ZXfRgWpoVhcF3?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Bebidas"
  },
  {
    id: 14,
    nome: "Sex on The Beach",
    descricao: "Bebida feita com vodka, schnapps de pêssego, suco de laranja, e suco de oxicoco.",
    preco: 18.9,
    foto: "https://th.bing.com/th/id/OIG4.dJWjnFfLy2YfQeGyi.jj?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Bebidas"
  },
  {
    id: 15,
    nome: "Negroni",
    descricao: "Coquetel feito de uma parte de gim, uma parte de vermute rosso, e uma parte de Campari, enfeitado com casca de laranja.",
    preco: 18.9,
    foto: "https://th.bing.com/th/id/OIG4.ZKfAjy599W_bZbX5H1BM?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Bebidas"
  },
  {
    id: 16,
    nome: "Bolinhos Bacalhau",
    descricao: "Porção de bolinhos de bacalhau com 6 unidadades, com molho especial da casa.",
    preco: 22.9,
    foto: "https://th.bing.com/th/id/OIG4.AgH_O8q9gBgu6.J9_U8k?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Acompanhamentos"
  },
  {
    id: 17,
    nome: "Combo Iscas",
    descricao: "Iscas de frango com batatas fritas, acompanha molho especial.",
    preco: 22.9,
    foto: "https://th.bing.com/th/id/OIG1.fvqpxWPbazrBt3SWhImU?w=1024&h=1024&rs=1&pid=ImgDetMain",
    categoria: "Acompanhamentos"
  },
  {
    id: 18,
    nome: "Carne de Sol",
    descricao: "Carne de sol em cubos, bem temperada.",
    preco: 30.9,
    foto: "https://th.bing.com/th/id/OIG2.U_bg99ELdzLEt8oX7E8D?pid=ImgGn",
    categoria: "Acompanhamentos"
  },
];

export { produtos };
