import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import  "./styles/global.css";
const loader = document.getElementById("site-loader");
loader?.classList.add("is-hidden");
window.setTimeout(() => loader?.remove(), 500);
ReactDom.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <App/>
</React.StrictMode>
);
