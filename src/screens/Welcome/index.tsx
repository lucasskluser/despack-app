import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Container,
  ContentContainer,
  Form,
  Header,
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

export function Welcome({ navigation }) {
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
          <Header>Seu marketplace de coleta de resíduos.</Header>
          <Subheader>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </Subheader>
          <Form>
            <TextInput placeholder="Digite o estado" />
            <TextInput placeholder="Digite a cidade" />
            <TouchableNativeFeedback>
              <View style={[styles.button, styles.buttonSearch]}>
                <View style={styles.buttonIcon}>
                  <Text>
                    <Icon name="search" color="#FFF" size={24} />
                  </Text>
                </View>
                <Text style={styles.buttonText}>Buscar</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
              <View style={[styles.button, styles.buttonSignIn]}>
                <Text style={styles.buttonText}>Entrar</Text>
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

  buttonSearch: {
    backgroundColor: "#00C5FF",
  },

  buttonSignIn: {
    backgroundColor: "#6C6C80",
  },
});
