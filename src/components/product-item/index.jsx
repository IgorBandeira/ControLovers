import React from "react";

import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/cart/slice";

import CustomButton from "../custom-button/index";

import * as Styles from "./styles";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleProductClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>
          {Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(Number(productsTotalPrice))}
        </p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
