import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../src/components/Button";

const CreatePostsScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] =
    useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(
    Camera.Constants.Type.back
  );
  const [flash, setFlash] = useState(
    Camera.Constants.FlashMode.off
  );
  const [location, setLocation] = useState(null);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus =
        await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(
        cameraStatus.status === "granted"
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Permission to access location was denied"
        );
        return;
      }
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data =
          await cameraRef.current.takePictureAsync();
        let location =
          await Location.getCurrentPositionAsync({});
        setLocation(location);
        setImage(data.uri);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Фото сохранено!");
        setImage(null);
        navigation.navigate("DefaultScreen", {
          image,
          location,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>Нет доступа к камере</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <Button
              icon={"sync"}
              onPress={() => {
                setType(
                  type === CameraType.back
                    ? CameraType.front
                    : CameraType.back
                );
              }}
            />
            <Button
              icon={"bolt"}
              color={
                flash === Camera.Constants.FlashMode.off
                  ? "gray"
                  : "#f1f1f1"
              }
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image
          source={{ uri: image }}
          style={styles.camera}
        />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title={"Переснять"}
              icon="sync"
              onPress={() => setImage(null)}
            />
            <Button
              title={"Сохранить"}
              icon="check"
              onPress={saveImage}
            />
          </View>
        ) : (
          <Button
            title={"Сделать фотографию"}
            icon="camera"
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingBottom: 70,
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
    // justifyContent: "flex-end",
    // alignItems: "center",
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

{
  /* <FontAwesome5
            name="camera"
            size={24}
            color="#BDBDBD"
          /> */
}
