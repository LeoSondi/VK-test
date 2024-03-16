import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  Panel,
  Group,
  Header,
  Title,
  Caption,
  CardGrid,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { createRoot } from "react-dom/client";
import Products from "../Products/Products";
import { useState } from "react";
import data from "../../data";

const App = () => {
  const [cart, setCart] = useState(data);

  const removeProduct = () => {};

  const totalSum = cart.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  const products = cart.map((product) => {
    return (
      <Products
        product={product}
        key={product.id}
        removeProduct={removeProduct}
      />
    );
  });

  return (
    <AppRoot style={{ padding: "0 24px" }}>
      <Panel id="main">
        <Header mode="secondary">
          <Caption level="1" style={{ marginBottom: 8 }}>
            Cart App for VK
          </Caption>
          <Title level="1" weight="1" style={{ margin: "0", color: "#f5f5f5" }}>
            Корзина
          </Title>
        </Header>
        <Group
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: "8px",
          }}
        >
          <CardGrid size="l" style={{ margin: 0, padding: 0 }}>
            {products}
          </CardGrid>
          <div
            style={{
              background: "#2c2d2e",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Title level="2">
              Итого:{" "}
              <span style={{ fontSize: "26px", margin: 0 }}>{totalSum}₽</span>
            </Title>
          </div>
        </Group>
      </Panel>
    </AppRoot>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
);

export default App;
