import React, { useState } from "react";
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
} from "react-native";
import { AccountCreated } from "../AccountCreated";
import { Welcome } from "../Welcome";

export function SignUp({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <WatermarkContainer>
        <Watermark
          resizeMode="contain"
          source={require("../../assets/despack-icon-gray-scale.png")}
        />
      </WatermarkContainer>
      <ContentContainer>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Logo
            resizeMode="contain"
            source={require("../../assets/despack-logo.png")}
          />
          <Header>Participe da comunidade e ajude o planeta.</Header>
          <Subheader>
            Crie sua conta para sugerir alterações e avaliar pontos de coleta.
          </Subheader>
          <Form>
            <TextInput placeholder="Seu nome" style={{ marginBottom: 8 }} />
            <TextInput placeholder="Seu e-mail" style={{ marginBottom: 8 }} />
            <InputGroup style={{ marginBottom: 8 }}>
              <TextInput placeholder="Sua senha" />
              <Icon
                name={showPassword ? "eye" : "eye-off"}
                color="#6c6c80"
                size={24}
                style={{ position: "absolute", right: 20 }}
                onPress={() => setShowPassword(!showPassword)}
              />
            </InputGroup>
            <TextInput
              placeholder="Confirme sua senha"
              style={{ marginBottom: 8 }}
            />
            <Text style={styles.agreementText}>
              Ao criar sua conta você concorda com os nossos{" "}
              <Text style={styles.agreementTextBold}>Termos de Uso</Text> e
              nossa{" "}
              <Text style={styles.agreementTextBold}>
                Política de Privacidade
              </Text>
              .
            </Text>
            <TouchableNativeFeedback
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: Welcome.name }, { name: "Login" }, { name: AccountCreated.name }],
                })
              }
            >
              <View style={[styles.button, styles.buttonSignIn]}>
                <Text style={styles.buttonText}>Cria conta</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.goBack()}>
              <View style={[styles.button, styles.buttonSignUp]}>
                <Text style={[styles.buttonText, styles.buttonTextDark]}>
                  FAZER LOGIN
                </Text>
              </View>
            </TouchableNativeFeedback>
          </Form>
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

  agreementText: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  agreementTextBold: {
    fontWeight: "bold",
  },
});
