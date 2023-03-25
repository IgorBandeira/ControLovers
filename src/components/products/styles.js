import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  padding: 40px 0 40px 40px;
  grid-row-gap: 20px;
  color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fffb00;
  background: linear-gradient(90deg, rgb(0, 225, 255) 0%, rgb(2, 75, 85) 100%);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
