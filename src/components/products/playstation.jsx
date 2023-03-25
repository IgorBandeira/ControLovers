import React from "react";

import playstation from "../../data/playstation";

import ProductItem from "../product-item/index";

import * as Styles from "./styles";

const Playstation = () => {
  return (
    <Styles.Container>
      {playstation.map((product) => (
        <ProductItem product={product} />
      ))}
    </Styles.Container>
  );
};

export default Playstation;
