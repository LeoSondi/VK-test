import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  PanelHeader,
  Panel,
  Group,
  Header,
  Card,
  Title,
  CardGrid,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <AppRoot>
      <PanelHeader mode="primary" size="large">
        VK Test, Сart App
      </PanelHeader>
      <Panel id="main">
        <Header mode="secondary">
          <Title level="1" weight="1" style={{ margin: "0", color: "#f5f5f5" }}>
            Корзина
          </Title>
        </Header>
        <Group>
          <div></div>
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
