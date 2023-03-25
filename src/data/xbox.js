import products from "./products";

const xbox = products.filter((product) => product.category === "Xbox");
console.log(xbox);

export default xbox;
