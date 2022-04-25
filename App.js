import React from "react";
import Listlocation from "./components/Listlocation";
import Detailpage from "./components/Detailpage";
import Addlocation from "./components/Addlocation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Listlocation} />
        <Stack.Screen name="details" component={Detailpage} />
        <Stack.Screen name="add" component={Addlocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
