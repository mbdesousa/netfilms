import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/Header";
import useCachedResources from "./hooks/useCachedResources";
import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Header />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ header: () => null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar backgroundColor={'#000000'} />
      </SafeAreaProvider>
    );
  }
}

export default App;
