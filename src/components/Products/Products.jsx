import { Icon12Add, Icon16DeleteOutline, Icon16Minus } from "@vkontakte/icons";
import { Card, IconButton, Input, Text } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/actions.js";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  @media screen and (max-width: 426px) {
    align-items: center;
    padding: 16px;
  }
`;

const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  @media screen and (max-width: 426px) {
    align-items: center;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  width: 120px;
  height: auto;
  border-radius: 10px;
  @media screen and (max-width: 426px) {
    width: 100%;
    height: auto;
  }
`;

const Products = ({ product }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(product.count);

  useEffect(() => {
    // Обновляем значение состояния count при изменении количества товаров
    setCount(product.count);
  }, [product.count]);

  // Обработчик для уменьшения количества товаров
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product)); // Отправляем действие в Redux
    setCount(count - 1); // Уменьшаем значение count на 1
  };

  // Обработчик для увеличения количества товаров
  const handleIncrease = () => {
    dispatch(increaseQuantity(product)); // Отправляем действие в Redux
    setCount(count + 1); // Увеличиваем значение count на 1
  };

  return (
    <StyledCard mode="shadow">
      <StyledProductContainer>
        <StyledImage
          src={`/assets/img/${product.img}`}
          product={product}
        ></StyledImage>
        <div>
          <h3 style={{ margin: "0 0 4px" }}>{product.title}</h3>
          <Text style={{ margin: "0 0 8px", color: "#ccc" }}>
            {product.description}
          </Text>
          <Text style={{ margin: "0", color: "#337BE6" }}>
            {product.price * product.count}₽
          </Text>
        </div>
      </StyledProductContainer>
      <StyledFlexContainer>
        <IconButton aria-label="Уменьшить" onClick={handleDecrease}>
          <Icon16Minus width={20} height={20} />
        </IconButton>
        <Input value={product.count} type="text" style={{ maxWidth: "50px" }} />
        <IconButton aria-label="Увеличить" onClick={handleIncrease}>
          <Icon12Add width={20} height={20} />
        </IconButton>
        <IconButton
          aria-label="Удалить"
          mode="secondary"
          onClick={() => dispatch(removeFromCart(product))}
        >
          <Icon16DeleteOutline width={20} height={20} />
        </IconButton>
      </StyledFlexContainer>
    </StyledCard>
  );
};

export default Products;
