import React from "react";
import { useSelector } from "react-redux";
import { AppRoot, Panel, Group, Title, CardGrid } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Products from "../components/Products/Products";
import MyHeader from "../components/Header/Header";
import styled from "styled-components";

const StyledGroup = styled(Group)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 8px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`;
const StyledAppRoot = styled(AppRoot)`
  padding: 24px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const StyledSumContainer = styled.div`
  background: #2c2d2e;
  padding: 24px;
  border-radius: 8px;
`;

const StyledParagraph = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin: 0;
`;

const App = () => {
  // Получаем данные из Redux-хранилища
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Вычисляем общую сумму товаров в корзине
  const totalSum = cartItems.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  return (
    <StyledAppRoot>
      <Panel id="main">
        <MyHeader />
        <StyledGroup>
          <CardGrid size="l" style={{ margin: 0, padding: 0 }}>
            {cartItems.map((product) => (
              <Products product={product} key={product.id} />
            ))}
          </CardGrid>
          <StyledSumContainer>
            <Title level="2">Итоговая сумма</Title>
            <StyledParagraph>{totalSum}₽</StyledParagraph>
          </StyledSumContainer>
        </StyledGroup>
      </Panel>
    </StyledAppRoot>
  );
};

export default App;
