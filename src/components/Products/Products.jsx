import { Icon12Add, Icon16DeleteOutline, Icon16Minus } from "@vkontakte/icons";
import { Button, Card, IconButton, Input, Text } from "@vkontakte/vkui";

const Products = ({ product, removeProduct }) => {
  return (
    <Card
      mode="shadow"
      style={{
        padding: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "10px",
            background: `url(/assets/img/${product.img}) no-repeat center / cover`,
          }}
        ></div>
        <div>
          <h3 style={{ margin: "0 0 4px" }}>{product.title}</h3>
          <Text style={{ margin: "0 0 8px", color: "#ccc" }}>
            {product.description}
          </Text>
          <Text style={{ margin: "0", color: "#337BE6" }}>
            {product.price * product.count}₽
          </Text>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <IconButton>
          <Icon16Minus width={20} height={20} />
        </IconButton>
        <Input value={product.count} type="text" style={{ maxWidth: "50px" }} />
        <IconButton>
          <Icon12Add width={20} height={20} />
        </IconButton>
        <IconButton mode="secondary" onClick={removeProduct(product.id)}>
          <Icon16DeleteOutline width={20} height={20} />
        </IconButton>
      </div>
    </Card>
  );
};

export default Products;
