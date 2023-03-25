import products from "./products";

const playstation = products.filter(
  (product) => product.category === "Playstation"
);
console.log(playstation);

export default playstation;
