import React, { useEffect, useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Container,
  ContentContainer,
  Form,
  Header,
  InputGroup,
  Logo,
  Subheader,
  TextInput,
  Watermark,
  WatermarkContainer,
} from "./style";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  ToastAndroid,
} from "react-native";
import { SignUp } from "../SignUp";
import { APIService } from "../../services/api.service";
import { Formik } from "formik";
import { AxiosError } from "axios";

export function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = async (email, password) => {
    const authService: APIService = new APIService();
    try {
      const response = await authService.login(email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: "Map", params: { token: response.token} }],
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status == 400) {
          ToastAndroid.show('Credenciais inválidas', ToastAndroid.LONG);
          return;
        }

        console.error(err);
      }
    }
  };

  return (
    <Container>
      <WatermarkContainer>
        <Watermark
          resizeMode="contain"
          source={require("../../assets/despack-icon-gray-scale.png")}
        />
      </WatermarkContainer>
      <ContentContainer>
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <View style={[styles.buttonBack]}>
            <View style={styles.buttonBackIcon}>
              <Text>
                <Icon name="arrow-left" color="#6c6c80" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonBackText}>TELA INICIAL</Text>
          </View>
        </TouchableNativeFeedback>
        <Logo
          resizeMode="contain"
          source={require("../../assets/despack-logo.png")}
        />
        <Header>Participe da comunidade e ajude o planeta.</Header>
        <Subheader>
          Faça login para sugerir alterações e avaliar pontos de coleta.
        </Subheader>
        <KeyboardAvoidingView>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              handleLoginSubmit(values.email, values.password)
            }
          >
            {({ handleChange, handleSubmit, isSubmitting, values }) => (
              <Form>
                <TextInput
                  placeholder="Seu e-mail"
                  style={{ marginBottom: 8 }}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  keyboardType={"email-address"}
                />
                <InputGroup style={{ marginBottom: 8 }}>
                  <TextInput
                    placeholder="Sua senha"
                    value={values.password}
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                  />
                  <Icon
                    name={showPassword ? "eye-off" : "eye"}
                    color="#6c6c80"
                    size={24}
                    style={{ position: "absolute", right: 20 }}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                </InputGroup>
                <TouchableNativeFeedback
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <View
                    style={[
                      styles.button,
                      styles.buttonSignIn,
                      isSubmitting && styles.buttonSignInDisabled,
                    ]}
                  >
                    {!isSubmitting && (
                      <Text style={styles.buttonText}>Entrar</Text>
                    )}
                    {isSubmitting && (
                      <Text style={styles.buttonText}>Entrando</Text>
                    )}
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  onPress={() => navigation.navigate(SignUp.name)}
                  disabled={isSubmitting}
                >
                  <View style={[styles.button, styles.buttonSignUp]}>
                    <Text style={[styles.buttonText, styles.buttonTextDark]}>
                      CRIAR UMA CONTA
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </Form>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ContentContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonBack: {
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
    height: 40,
  },

  buttonBackText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "left",
    color: "#6c6c80",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  buttonBackIcon: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  buttonTextDark: {
    color: "#6c6c80",
  },

  buttonSignIn: {
    backgroundColor: "#00C5FF",
  },

  buttonSignUp: {
    backgroundColor: "transparent",
    height: 40,
  },

  buttonSignInDisabled: {
    backgroundColor: "#6C6C80",
    opacity: 0.4,
  },
});
