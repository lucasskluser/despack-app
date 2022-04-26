import React from "react";
import { RectButton } from "react-native-gesture-handler";
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
} from "react-native";

export function AccountCreated() {
  return (
    <Container>
      <WatermarkContainer>
        <Watermark
          resizeMode="contain"
          source={require("../../assets/despack-icon-gray-scale.png")}
        />
      </WatermarkContainer>
      <ContentContainer>
        <Logo
          resizeMode="contain"
          source={require("../../assets/despack-logo.png")}
        />
        <Header>Sua conta foi criada!</Header>
        <Subheader>
          Para ativar sua conta, clique no link que foi enviado para o seu
          e-mail.
        </Subheader>
        <RectButton style={[styles.button, styles.buttonBack]}>
          <Text style={[styles.buttonText, styles.buttonTextDark]}>
            CRIAR UMA CONTA
          </Text>
        </RectButton>
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

  buttonBack: {
    backgroundColor: "transparent",
    height: 40,
    marginTop: 35
  },

  buttonTextDark: {
    color: "#6c6c80",
  },
});
