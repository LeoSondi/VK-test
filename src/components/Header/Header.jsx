import { Caption, Header, Title } from "@vkontakte/vkui";

const MyHeader = () => {
  return (
    <Header mode="secondary">
      <Caption level="1" style={{ marginBottom: 8 }}>
        Cart App for VK
      </Caption>
      <Title level="1" weight="1" style={{ margin: "0", color: "#f5f5f5" }}>
        Корзина
      </Title>
    </Header>
  );
};

export default MyHeader;
