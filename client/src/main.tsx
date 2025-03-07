import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Import your publishable key
const PUBLISHABLE_KEY = 'pk_test_bWFqb3ItY29icmEtNjUuY2xlcmsuYWNjb3VudHMuZGV2JA'


if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);