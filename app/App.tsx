import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";

const Stack = createNativeStackNavigator();

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name='Search'
              component={SearchScreen}
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
