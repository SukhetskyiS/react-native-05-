import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefaultScreen from "../NestedScreen/DefaultScreenPosts";
import CommentsScreen from "../NestedScreen/CommentsScreen";
import MapScreen from "../NestedScreen/MapScreen";

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreen}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
