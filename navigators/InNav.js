import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import { BLACK_COLOR } from "../colors";
import Detail from "../screens/Detail";
import Home from "../screens/Home";

const Nav = createNativeStackNavigator();

const InNav = () => (
  <Nav.Navigator
    screenOptions={{
      presentation: "modal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#000000",
      },
    }}
  >
    <Nav.Screen name="코인" component={Home} />
    <Nav.Screen name="Detail" component={Detail} />
  </Nav.Navigator>
);

export default InNav;