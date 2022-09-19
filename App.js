import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./src/routes/authStack";
import DrawerStack from "./src/routes/drawerStack";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_300Light
} from "@expo-google-fonts/poppins";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { colors } from "./src/utils/colors";

export default function App() {
  const { Navigator, Screen } = createStackNavigator();
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_700Bold, Poppins_300Light
  });

  if (!fontsLoaded)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={60} color={colors.primary} />
      </View>
    );

  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Auth" component={AuthStack} />
          <Screen name="App" component={DrawerStack} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
