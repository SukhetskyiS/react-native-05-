import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  console.log(route.params.location);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  // console.log(posts);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractData={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 343,
                height: 240,
                marginHorizontal: 16,
                marginBottom: 32,
              }}
            />
            <View style={styles.bottomFrame}>
              <View style={styles.commentBox}>
                <Feather
                  name="message-circle"
                  size={24}
                  color="#BDBDBD"
                  onPress={() =>
                    navigation.navigate("Comments")
                  }
                />
                <Text style={styles.commentText}>0</Text>
              </View>
              <View style={styles.locBox}>
                <EvilIcons
                  name="location"
                  size={24}
                  color="#BDBDBD"
                  onPress={() => {
                    navigation.navigate("Map");
                  }}
                />
                <Text style={styles.locationText}>
                  location
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  photo: {
    height: 240,
    marginBottom: 10,
    borderRadius: 8,
  },

  bottomFrame: {
    marginTop: 8,
    flexDirection: "row",
  },
  commentBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginLeft: 6,
  },
  locBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 49,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 4,
  },
});

export default DefaultScreen;
