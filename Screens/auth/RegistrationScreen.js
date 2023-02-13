import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
  // console.log(Platform.OS);
  const [isShownKeyboard, setIsShownKeyboard] =
    useState(false);
  const [state, setState] = useState(initialState);
  const [focus, setFocus] = useState("");
  const [securePass, setSecurePass] = useState(true);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const onFocus = (data) => {
    setIsShownKeyboard(true);
    setFocus(data);
  };

  const onBlur = () => {
    setFocus("");
  };

  const onChange = () => {
    if (securePass) {
      setSecurePass(false);
    } else {
      setSecurePass(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/bg.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" && "padding"}
          >
            <View style={styles.form}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  Регистрация
                </Text>
              </View>
              <View style={{ marginHorizontal: 16 }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor:
                      focus === "login"
                        ? "#FF6C00"
                        : "#E8E8E8",
                  }}
                  textAlign={"left"}
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    onFocus("login");
                  }}
                  onBlur={onBlur}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 16,
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor:
                      focus === "email"
                        ? "#FF6C00"
                        : "#E8E8E8",
                  }}
                  textAlign={"left"}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    onFocus("email");
                  }}
                  onBlur={onBlur}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 16,
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor:
                      focus === "password"
                        ? "#FF6C00"
                        : "#E8E8E8",
                  }}
                  textAlign={"left"}
                  secureTextEntry={securePass}
                  autoCorrect={false}
                  textContentType="password"
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    onFocus("password");
                  }}
                  onBlur={onBlur}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <Text
                  style={styles.passwordShow}
                  onPress={onChange}
                >
                  Показать
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.buttonText}>
                  Зарегистрироваться
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  ...styles.signContainer,
                  marginBottom: isShownKeyboard ? -116 : 45,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Login")
                  }
                >
                  <Text style={styles.signText}>
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    fontFamily: "Roboto-Regular",
  },
  passwordShow: {
    position: "absolute",
    top: 16,
    right: 16,
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  form: {
    backgroundColor: "#fff",
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button: {
    height: 51,
    marginTop: 59,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  signText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  signContainer: {
    alignItems: "center",
    marginTop: 16,
  },
});
