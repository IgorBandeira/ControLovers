const products = [
  {
    id: "minecraft",
    price: 575,
    name: "Minecraft",
    category: "Xbox",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTK_ViW7W1J2zZpeJY3DIQ28JU5cpkZmy5P2dqj2GUEUELWHcEMhwVQcuYXuQ1CMlX2sBFvY2KP2UAERB7zHgPySfuwud6kz3Qf5YT12m8ZYNzBw58cBl8C&usqp=CAE",
  },
  {
    id: "demonslayer",
    name: "Demon Slayer",
    price: 480,
    category: "Playstation",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/controle-yesgame-compativel-com-ps5-damon-slayer-yesgame-controles/yesgameeletronics/dmffem/1d2e3a87d77cd16d4d92d56bee964565.jpeg",
  },
  {
    price: 500,
    id: "fortnite",
    category: "Xbox",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/controle-stelf-compativel-com-xbox-series-tilted-fortnite-casual-stelf-controles/stelfcontroles/5d395e9c7eb611ecb5f14201ac185055/3cb0779644eb9c1e2939931366ca8afb.jpeg",
    name: "Fortnite",
  },
  {
    name: "Destiny",
    price: 450,
    category: "Playstation",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/controle-yesgame-compativel-com-ps5-destiny-yesgame-controles/yesgameeletronics/p5dd/2b5e656a555711f8752eec85070ff9d4.jpeg",
    id: "destiny",
  },
  {
    price: 420,
    id: "rickmorty",
    name: "Rick and Morty",
    category: "Xbox",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/04/controle-xbox-series-ricky-and-morty-colorido-700x700.jpg.webp",
  },
  {
    price: 690,
    name: "Deadpool",
    id: "deadpool",
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/uploads/2022/12/controle-ps5-dead-pool-700x700.png",
  },
  {
    price: 400,
    category: "Xbox",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfmMmzGD69Aa5VdJpCNEaw5AG8B-CL3grv2S5usGHsbQpjH3arr1tHpg5hTIEKM4ZcleJqJkb7BV9p1q2yvAy9G-IJ8ysQLQ&usqp=CAY",
    id: "apex",
    name: "Apex Legends",
  },
  {
    id: "fifa",
    name: "Fifa",
    category: "Playstation",
    price: 550,
    imageUrl: "https://cf.shopee.com.br/file/0be7d65ddb423bada65d63dfb9247533",
  },
  {
    id: "callofduty",
    name: "Call of Duty - Vanguard",
    category: "Xbox",
    price: 530,
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/01/controle-yesgame-xbox-series-vanguard.png.webp",
  },
  {
    id: "thelastofus",
    name: "The Last of Us II",
    category: "Playstation",
    price: 825,
    imageUrl:
      "https://cdn.awsli.com.br/1000x1000/1610/1610163/produto/89680325/skin-ps5-controle-the-last-of-us-part-ii-a0fcab1a.jpg",
  },
  {
    id: "overwatch",
    name: "Overwatch",
    price: 500,
    category: "Xbox",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2023/01/controle-xbox-overwatch-700x700.png.webp",
  },
  {
    id: "sekiro",
    name: "Sekiro",
    price: 460,
    category: "Playstation",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/4630936250/imagens/controle-ps5-original-sony-dualsense-pro-alta-performance-sekiro/4630936348_1_large.jpg",
  },
  {
    id: "naruto",
    name: "Naruto",
    price: 400,
    category: "Xbox",
    imageUrl: "https://stelfcontroles.com.br/wp-content/uploads/MG_8286.jpg",
  },
  {
    id: "godofwar",
    name: "God of War Ragnarök",
    price: 750,
    category: "Playstation",
    imageUrl:
      "https://down-br.img.susercontent.com/file/7e67daff44355a75d08f41f7daba2020",
  },
  {
    id: "punisher",
    name: "The Punisher",
    price: 390,
    category: "Xbox",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3D-LeF1GOEITZ8-8MjLbrLMxKzltdLL8rMJ6Oj8IHlRfOexE7YHIo41E9CW3Eo4JgMpX0ReoRma8Put_QvsbJfQ_AYmrNbZ3ZkRGk5kEP417sGGvXaF_9vg&usqp=CAE",
  },
  {
    id: "batman",
    name: "The Batman",
    price: 845,
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2023/01/controle-ps5-batman-red.png.webp",
  },
  {
    id: "dragonball",
    name: "Dragon Ball Super",
    category: "Xbox",
    price: 455,
    imageUrl:
      "https://cdn.awsli.com.br/600x700/1610/1610163/produto/77603845/xbox-series-controle-skin-crash-bandicoot-4-7f6db303.jpg",
  },
  {
    id: "assassinscreed",
    name: "Assassin's Creed Valhalla",
    price: 787,
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/12/controle-ps5-assassins-creeds-700x700.png.webp",
  },
  {
    id: "rainbowsix",
    name: "Rainbow Six Siege",
    price: 375,
    category: "Xbox",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/01/controle-yesgame-xbox-series-R6.png.webp",
  },
  {
    id: "spiderman",
    name: "Spider-Man: Miles Morales",
    price: 800,
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/07/controle-yesgame-ps5-spiderman-F-700x700.png.webp",
  },
  {
    id: "eldenring",
    name: "Elden Ring",
    price: 700,
    category: "Xbox",
    imageUrl:
      "https://yesgame.com.br/wp-content/uploads/2022/08/controle-xbox-elden-ring-F-700x700.jpg",
  },
  {
    id: "gothamknights",
    name: "Gotham Knights",
    price: 880,
    category: "Playstation",
    imageUrl:
      "https://images-submarino.b2w.io/produtos/5806862806/imagens/skin-ps5-controle-playstation-5-adesivo-gotham-knights/5806862806_1_large.jpg",
  },
  {
    id: "callistoprotocoll",
    name: "The Callisto Protocol",
    price: 430,
    category: "Xbox",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2023/01/controle-xbox-callisto-protocol.png.webp",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077",
    price: 450,
    category: "Playstation",
    imageUrl:
      "https://forums.cdprojektred.com/index.php?attachments/controller-jpg.11035931/",
  },
  {
    id: "nemesis",
    name: "Resident Evil Nemesis",
    price: 390,
    category: "Xbox",
    imageUrl:
      "https://stelfcontroles.com.br/wp-content/uploads/fb0ed335-08ae-43b8-81dd-26fc962659de.jpg",
  },
  {
    id: "battle",
    name: "Battlefield 2042",
    price: 375,
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/01/controle-yesgame-ps5-Battlefield-2042.png.webp",
  },
  {
    id: "harrypotter",
    name: "Harry Potter",
    price: 350,
    category: "Xbox",
    imageUrl:
      "https://stelfcontroles.com.br/wp-content/uploads/f0b75e0b-56b7-4af5-855b-ac856e71e3fb.jpg",
  },
  {
    id: "horizon",
    name: "Horizon",
    price: 400,
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/04/controle-ps5-horizon-amarelo.png.webp",
  },
  {
    id: "pokemon",
    name: "Pokémon",
    price: 310,
    category: "Xbox",
    imageUrl:
      "https://stelfcontroles.com.br/wp-content/uploads/0b34f3d1-9dc6-4968-bb80-39a464c38e0f.jpg",
  },
  {
    id: "dyinglight",
    name: "Dying Light 2",
    price: 340,
    category: "Playstation",
    imageUrl:
      "https://yesgame.com.br/wp-content/webp-express/webp-images/uploads/2022/04/controle-ps5-dyng-ligth2-700x700.png.webp",
  },
  {
    id: "streetfighter",
    name: "Street Fighter V",
    price: 360,
    category: "Xbox",
    imageUrl:
      "https://cdn.awsli.com.br/1000x1000/1610/1610163/produto/151003537/xbox-series-s-x-controle-skin-street-fighter-v-b5d054a8.jpg",
  },
  {
    id: "readdead",
    name: "Red Dead Redemption",
    price: 650,
    category: "Playstation",
    imageUrl: "https://cf.shopee.com.br/file/f26b423369175a30ee46be060bb8c5da",
  },
];

export default products;
