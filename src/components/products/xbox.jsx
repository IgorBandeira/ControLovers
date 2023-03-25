import React from "react";

import xbox from "../../data/xbox";

import ProductItem from "../product-item/index";

import * as Styles from "./styles";

const Xbox = () => {
  return (
    <Styles.Container>
      {xbox.map((product) => (
        <ProductItem product={product} />
      ))}
    </Styles.Container>
  );
};

export default Xbox;
