import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./authRoutes";

import React, { useState } from "react";
import { AppRoutes } from "./appRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
