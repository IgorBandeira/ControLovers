import minecraft from "../assets/xbox/minecrat.jpg";
import demonSlayer from "../assets/xbox/demon_slayer.png";
import fortnite from "../assets/xbox/fortnite.png";
import destiny from "../assets/xbox/destiny.png";
import rickMorty from "../assets/xbox/rick_morty.jpg";
import deadpool from "../assets/xbox/deadpool.png";
import apex from "../assets/xbox/apex.jpg";
import fifa from "../assets/xbox/fifa.jpg";
import callOfDuty from "../assets/xbox/cod.jpg";
import theLastOfUs from "../assets/xbox/thelastofus2.jpg";
import overwatch from "../assets/xbox/overwatch.jpg";
import sekiro from "../assets/xbox/sekiro.png";
import naruto from "../assets/xbox/naruto.png";
import godOfWar from "../assets/xbox/god_of_war.png";
import punisher from "../assets/xbox/punisher.png";
import batman from "../assets/xbox/thebatman.png";
import dragonBall from "../assets/xbox/dbz.png";
import assassinsCreed from "../assets/xbox/assassinscreed.jpg";
import rainbowSix from "../assets/xbox/rainbowsix.jpg";
import spiderman from "../assets/xbox/spiderman.png";
import eldenRing from "../assets/xbox/eldenring.png";
import gothamKnights from "../assets/xbox/gothamknights.png";
import callistoProtocol from "../assets/xbox/callistoprotocoll.jpg";
import cyberpunk from "../assets/xbox/cyberpunk.jpg";
import nemesis from "../assets/xbox/nemesis.png";
import battlefield from "../assets/xbox/battlefield.png";
import harryPotter from "../assets/xbox/harrypotter.jpg";
import horizon from "../assets/xbox/horizon.png";
import pokemon from "../assets/xbox/pokemon.jpg";
import mortalKombat from "../assets/xbox/mortalkombat.jpg";
import streetFighter from "../assets/xbox/streetfighter.jpg";
import readDead from "../assets/xbox/readdead.png";

const products = [
  {
    id: "minecraft",
    price: 575.6,
    name: "Minecraft",
    category: "Xbox",
    imageUrl: minecraft,
  },
  {
    id: "demonslayer",
    name: "Demon Slayer",
    price: 480.9,
    category: "Playstation",
    imageUrl: demonSlayer,
  },
  {
    price: 499.99,
    id: "fortnite",
    category: "Xbox",
    imageUrl: fortnite,
    name: "Fortnite",
  },
  {
    name: "Destiny",
    price: 449.99,
    category: "Playstation",
    imageUrl: destiny,
    id: "destiny",
  },
  {
    price: 420.15,
    id: "rickmorty",
    name: "Rick and Morty",
    category: "Xbox",
    imageUrl: rickMorty,
  },
  {
    price: 690.1,
    name: "Deadpool",
    id: "deadpool",
    category: "Playstation",
    imageUrl: deadpool,
  },
  {
    price: 399.99,
    category: "Xbox",
    imageUrl: apex,
    id: "apex",
    name: "Apex Legends",
  },
  {
    id: "fifa",
    name: "Fifa",
    category: "Playstation",
    price: 549.99,
    imageUrl: fifa,
  },
  {
    id: "callofduty",
    name: "Call of Duty",
    category: "Xbox",
    price: 530.98,
    imageUrl: callOfDuty,
  },
  {
    id: "thelastofus",
    name: "The Last of Us II",
    category: "Playstation",
    price: 825.5,
    imageUrl: theLastOfUs,
  },
  {
    id: "overwatch",
    name: "Overwatch",
    price: 499.99,
    category: "Xbox",
    imageUrl: overwatch,
  },
  {
    id: "sekiro",
    name: "Sekiro",
    price: 459.99,
    category: "Playstation",
    imageUrl: sekiro,
  },
  {
    id: "naruto",
    name: "Naruto",
    price: 399.99,
    category: "Xbox",
    imageUrl: naruto,
  },
  {
    id: "godofwar",
    name: "God of War Ragnarök",
    price: 750.69,
    category: "Playstation",
    imageUrl: godOfWar,
  },
  {
    id: "punisher",
    name: "The Punisher",
    price: 390.9,
    category: "Xbox",
    imageUrl: punisher,
  },
  {
    id: "batman",
    name: "The Batman",
    price: 845.56,
    category: "Playstation",
    imageUrl: batman,
  },
  {
    id: "dragonball",
    name: "Dragon Ball Super",
    category: "Xbox",
    price: 455.7,
    imageUrl: dragonBall,
  },
  {
    id: "assassinscreed",
    name: "Assassin's Creed Valhalla",
    price: 787.9,
    category: "Playstation",
    imageUrl: assassinsCreed,
  },
  {
    id: "rainbowsix",
    name: "Rainbow Six Siege",
    price: 375.9,
    category: "Xbox",
    imageUrl: rainbowSix,
  },
  {
    id: "spiderman",
    name: "Spider-Man: Miles Morales",
    price: 799.99,
    category: "Playstation",
    imageUrl: spiderman,
  },
  {
    id: "eldenring",
    name: "Elden Ring",
    price: 699.99,
    category: "Xbox",
    imageUrl: eldenRing,
  },
  {
    id: "gothamknights",
    name: "Gotham Knights",
    price: 880.89,
    category: "Playstation",
    imageUrl: gothamKnights,
  },
  {
    id: "callistoprotocoll",
    name: "The Callisto Protocol",
    price: 430.16,
    category: "Xbox",
    imageUrl: callistoProtocol,
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077",
    price: 450.25,
    category: "Playstation",
    imageUrl: cyberpunk,
  },
  {
    id: "nemesis",
    name: "Resident Evil Nemesis",
    price: 390.85,
    category: "Xbox",
    imageUrl: nemesis,
  },
  {
    id: "battle",
    name: "Battlefield 2042",
    price: 375.4,
    category: "Playstation",
    imageUrl: battlefield,
  },
  {
    id: "harrypotter",
    name: "Harry Potter",
    price: 349.99,
    category: "Xbox",
    imageUrl: harryPotter,
  },
  {
    id: "horizon",
    name: "Horizon",
    price: 399.99,
    category: "Playstation",
    imageUrl: horizon,
  },
  {
    id: "pokemon",
    name: "Pokémon",
    price: 310.9,
    category: "Xbox",
    imageUrl: pokemon,
  },
  {
    id: "mortalkombat",
    name: "Mortal Kombat 11",
    price: 340.6,
    category: "Playstation",
    imageUrl: mortalKombat,
  },
  {
    id: "streetfighter",
    name: "Street Fighter V",
    price: 360.5,
    category: "Xbox",
    imageUrl: streetFighter,
  },
  {
    id: "readdead",
    name: "Red Dead Redemption",
    price: 649.99,
    category: "Playstation",
    imageUrl: readDead,
  },
];

export default products;
