import React from "react";
import { SubscriptionProvider } from "./src/context/wiseContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <SubscriptionProvider>
      <Routes />
    </SubscriptionProvider>
  );
}
