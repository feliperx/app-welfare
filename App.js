import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RoutesAdm from "./src/routes/routesAdm"; //rotas do adm
import RoutesCli from "./src/routes/routesCli"; //rotas do cliente

export default function App() {
  return (
    <RoutesCli />
  );
}

