const products = [
  {
    id: "minecraft",
    price: 575.6,
    name: "Minecraft",
    category: "Xbox",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTK_ViW7W1J2zZpeJY3DIQ28JU5cpkZmy5P2dqj2GUEUELWHcEMhwVQcuYXuQ1CMlX2sBFvY2KP2UAERB7zHgPySfuwud6kz3Qf5YT12m8ZYNzBw58cBl8C&usqp=CAE",
  },
  {
    id: "demonslayer",
    name: "Demon Slayer",
    price: 480.9,
    category: "Playstation",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/controle-yesgame-compativel-com-ps5-damon-slayer-yesgame-controles/yesgameeletronics/dmffem/1d2e3a87d77cd16d4d92d56bee964565.jpeg",
  },
  {
    price: 499.99,
    id: "fortnite",
    category: "Xbox",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/controle-stelf-compativel-com-xbox-series-tilted-fortnite-casual-stelf-controles/stelfcontroles/5d395e9c7eb611ecb5f14201ac185055/3cb0779644eb9c1e2939931366ca8afb.jpeg",
    name: "Fortnite",
  },
  {
    name: "Destiny",
    price: 449.99,
    category: "Playstation",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/controle-yesgame-compativel-com-ps5-destiny-yesgame-controles/yesgameeletronics/p5dd/2b5e656a555711f8752eec85070ff9d4.jpeg",
    id: "destiny",
  },
  {
    price: 420.15,
    id: "rickmorty",
    name: "Rick and Morty",
    category: "Xbox",
    imageUrl:
      "https://cdn.awsli.com.br/800x800/1664/1664415/produto/77611694/xbox-series-s-x-controle-skin-rick-and-morty-aea8181c.jpg",
  },
  {
    price: 690.1,
    name: "Deadpool",
    id: "deadpool",
    category: "Playstation",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/4726663444/imagens/controle-personalizado-deadpool-sony-ps5/4726663444_1_large.jpg",
  },
  {
    price: 399.99,
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
    price: 549.99,
    imageUrl: "https://cf.shopee.com.br/file/0be7d65ddb423bada65d63dfb9247533",
  },
  {
    id: "callofduty",
    name: "Call of Duty",
    category: "Xbox",
    price: 530.98,
    imageUrl: "https://i.zst.com.br/thumbs/12/2a/2c/127480899.jpg",
  },
  {
    id: "thelastofus",
    name: "The Last of Us II",
    category: "Playstation",
    price: 825.5,
    imageUrl:
      "https://cdn.awsli.com.br/1000x1000/1610/1610163/produto/89680325/skin-ps5-controle-the-last-of-us-part-ii-a0fcab1a.jpg",
  },
  {
    id: "overwatch",
    name: "Overwatch",
    price: 499.99,
    category: "Xbox",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/4430865961/imagens/skin-xbox-one-slim-x-controle-adesivo-overwatch/4430865961_1_large.jpg",
  },
  {
    id: "sekiro",
    name: "Sekiro",
    price: 459.99,
    category: "Playstation",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/4630936250/imagens/controle-ps5-original-sony-dualsense-pro-alta-performance-sekiro/4630936348_1_large.jpg",
  },
  {
    id: "naruto",
    name: "Naruto",
    price: 399.99,
    category: "Xbox",
    imageUrl: "https://stelfcontroles.com.br/wp-content/uploads/MG_8286.jpg",
  },
  {
    id: "godofwar",
    name: "God of War Ragnarök",
    price: 750.69,
    category: "Playstation",
    imageUrl:
      "https://down-br.img.susercontent.com/file/7e67daff44355a75d08f41f7daba2020",
  },
  {
    id: "punisher",
    name: "The Punisher",
    price: 390.9,
    category: "Xbox",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3D-LeF1GOEITZ8-8MjLbrLMxKzltdLL8rMJ6Oj8IHlRfOexE7YHIo41E9CW3Eo4JgMpX0ReoRma8Put_QvsbJfQ_AYmrNbZ3ZkRGk5kEP417sGGvXaF_9vg&usqp=CAE",
  },
  {
    id: "batman",
    name: "The Batman",
    price: 845.56,
    category: "Playstation",
    imageUrl:
      "https://lazamodz.com/cdn/shop/products/DSC01042.jpg?v=1650753954",
  },
  {
    id: "dragonball",
    name: "Dragon Ball Super",
    category: "Xbox",
    price: 455.7,
    imageUrl:
      "https://cdn.awsli.com.br/600x700/1610/1610163/produto/77603845/xbox-series-controle-skin-crash-bandicoot-4-7f6db303.jpg",
  },
  {
    id: "assassinscreed",
    name: "Assassin's Creed Valhalla",
    price: 787.9,
    category: "Playstation",
    imageUrl:
      "https://www.luxskinsofficial.com/cdn/shop/products/LUXPS50122_3_dd2cc5f6-48bf-47f6-bc7a-9f3a3340cc6f_1445x.jpg?v=1658916294",
  },
  {
    id: "rainbowsix",
    name: "Rainbow Six Siege",
    price: 375.9,
    category: "Xbox",
    imageUrl:
      "https://cdn.awsli.com.br/300x300/1664/1664415/produto/125118702/skin-xbox-one-fat-controle-tom-clancys-rainbow-six-siege-extraction-ade74f10.jpg",
  },
  {
    id: "spiderman",
    name: "Spider-Man: Miles Morales",
    price: 799.99,
    category: "Playstation",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/1087887/controle_sony_dualsense_personalizado_spider_man_miles_morales_ps5_2624_1_5f21a1c9e69ad574aa645ac89f876d22.jpg",
  },
  {
    id: "eldenring",
    name: "Elden Ring",
    price: 699.99,
    category: "Xbox",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/6499513832/imagens/controle-yesgame-xbox-series-alta-performance-elden-ring-dark/6499513841_1_large.jpg",
  },
  {
    id: "gothamknights",
    name: "Gotham Knights",
    price: 880.89,
    category: "Playstation",
    imageUrl:
      "https://images-submarino.b2w.io/produtos/5806862806/imagens/skin-ps5-controle-playstation-5-adesivo-gotham-knights/5806862806_1_large.jpg",
  },
  {
    id: "callistoprotocoll",
    name: "The Callisto Protocol",
    price: 430.16,
    category: "Xbox",
    imageUrl:
      "https://loja.ctmd.eng.br/99116-thickbox/controle-xbox-one-series-blueooth-c-usb-c-paddles.jpg",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077",
    price: 450.25,
    category: "Playstation",
    imageUrl:
      "https://forums.cdprojektred.com/index.php?attachments/controller-jpg.11035931/",
  },
  {
    id: "nemesis",
    name: "Resident Evil Nemesis",
    price: 390.85,
    category: "Xbox",
    imageUrl:
      "https://stelfcontroles.com.br/wp-content/uploads/fb0ed335-08ae-43b8-81dd-26fc962659de.jpg",
  },
  {
    id: "battle",
    name: "Battlefield 2042",
    price: 375.4,
    category: "Playstation",
    imageUrl:
      "https://down-br.img.susercontent.com/file/bf3488a29ce791b957e3545b1af5fa06",
  },
  {
    id: "harrypotter",
    name: "Harry Potter",
    price: 349.99,
    category: "Xbox",
    imageUrl:
      "https://stelfcontroles.com.br/wp-content/uploads/f0b75e0b-56b7-4af5-855b-ac856e71e3fb.jpg",
  },
  {
    id: "horizon",
    name: "Horizon",
    price: 399.99,
    category: "Playstation",
    imageUrl:
      "https://a-static.mlcdn.com.br/450x450/adesivo-compativel-ps5-controle-playstation-5-skin-horizon-forbidden-west-pop-arte-skins/poparteskins2/15600820857/1c799465e0d5d44dc9fde388301e7ad2.jpg",
  },
  {
    id: "pokemon",
    name: "Pokémon",
    price: 310.9,
    category: "Xbox",
    imageUrl:
      "https://stelfcontroles.com.br/wp-content/uploads/0b34f3d1-9dc6-4968-bb80-39a464c38e0f.jpg",
  },
  {
    id: "mortalkombat",
    name: "Mortal Kombat 11",
    price: 340.6,
    category: "Playstation",
    imageUrl:
      "https://cdn.awsli.com.br/600x700/1610/1610163/produto/89680242/skin-ps5-controle-mortal-kombat-11-c176d69c.jpg",
  },
  {
    id: "streetfighter",
    name: "Street Fighter V",
    price: 360.5,
    category: "Xbox",
    imageUrl:
      "https://cdn.awsli.com.br/1000x1000/1610/1610163/produto/151003537/xbox-series-s-x-controle-skin-street-fighter-v-b5d054a8.jpg",
  },
  {
    id: "readdead",
    name: "Red Dead Redemption",
    price: 649.99,
    category: "Playstation",
    imageUrl: "https://cf.shopee.com.br/file/f26b423369175a30ee46be060bb8c5da",
  },
];

export default products;
