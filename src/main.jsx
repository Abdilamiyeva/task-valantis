import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { generateXAuthHeaderValue } from "./utils/util.js";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
localStorage.setItem(
  "token",
  generateXAuthHeaderValue(import.meta.env.VITE_APP_X_AUTH)
);
