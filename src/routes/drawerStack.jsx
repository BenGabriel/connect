import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainApp from "../screens/home/mainApp";
import UserMap from "../screens/maps/map";
import AppStack from "./appStack";
import AutoShopList from "../screens/home/autoShopList";
import AutoMap from "../screens/maps/autoMap";
import Profile from "../screens/profile/profile";
import ChatScreen from "../screens/chat/chatScreen";
import OrderScreen from "../screens/maps/orderScreen";
import OrderHistory from "../screens/profile/orderHistory";
import EditProfile from "../screens/profile/editProfile";
import MechanicsReviews from "../screens/reviews/mechanicsReviews";

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      backBehavior="history"
      screenOptions={{
        swipeEnabled: false,
        headerShown: false
      }}
      drawerContent={(props) => <AppStack {...props} />}
    >
      <Drawer.Screen name="MainApp" component={MainApp} />
      <Drawer.Screen name="Map" component={UserMap} />
      <Drawer.Screen name="AutoShopList" component={AutoShopList} />
      <Drawer.Screen name="AutoMap" component={AutoMap} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen name="OrderScreen" component={OrderScreen} />
      <Drawer.Screen name="OrderHistory" component={OrderHistory} />
      <Drawer.Screen name="MechanicsReviews" component={MechanicsReviews} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
