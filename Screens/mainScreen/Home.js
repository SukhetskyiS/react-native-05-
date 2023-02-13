import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, StyleSheet } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import {
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { position: "absolute" },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIconStyle: { marginLeft: 90 },
          title: "Публикации",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            marginLeft: 140,
          },
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          tabBarInActiveTintColor: "#212121",

          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            marginLeft: 103,
          },
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={styles.addBtn}>
              <AntDesign
                name="plus"
                size={24}
                color="#FFFFFF"
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIconStyle: { marginRight: 90 },
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          tabBarInActiveTintColor: "#212121",
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    marginTop: 9,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});

export default Home;
