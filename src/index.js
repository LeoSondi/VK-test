import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Импортируем Provider из react-redux
import App from "../src/App/App.jsx";
import store from "../src/redux/store.js";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>
);
