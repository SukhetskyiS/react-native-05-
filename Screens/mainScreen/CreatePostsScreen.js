import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";

import { FontAwesome5 } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsynk();
    setPhoto(photo.url);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 150, height: 150 }}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={takePhoto}
          style={styles.cameraContainer}
        >
          <FontAwesome5
            name="camera"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  cameraContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  snap: {
    color: "#fff",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});

export default CreatePostsScreen;
