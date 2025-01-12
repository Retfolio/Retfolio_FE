import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";  // Google OAuth Provider
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="1007754606140-pd4kgkciecmdjb63ln3ji2drlmikh7oq.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
