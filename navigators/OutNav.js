import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import { BLACK_COLOR } from "../colors";
import Join from "../screens/Join";
import Login from "../screens/Login";

const Nav = createNativeStackNavigator();

const OutNav = () => (
  <Nav.Navigator
    screenOptions={{
      presentation: "modal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#000000",
      },
    }}
  >
    <Nav.Screen name="Login" component={Login} />
    <Nav.Screen name="Join" component={Join} />
  </Nav.Navigator>
);

export default OutNav;