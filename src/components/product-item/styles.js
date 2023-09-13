import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40%;
  margin-bottom: 10%;

  @media (max-width: 1268px) {
    width: 90%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;

  button {
    visibility: hidden;
    opacity: 0;
    background-color: #64a4e1;
    transition: all 0.5s ease;
    margin: 20px;
  }

  button:hover {
    background-color: #f9f93f;
    -webkit-text-stroke-width: 0;
    color: #64a4e1;
    font-weight: bolder;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;

    button {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 1268px) {
    width: 100%;
  }
`;
