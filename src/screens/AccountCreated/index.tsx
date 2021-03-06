import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Container,
  ContentContainer,
  Header,
  Logo,
  Subheader,
  Watermark,
  WatermarkContainer,
} from "./style";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

export function AccountCreated({ navigation }) {
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
        <TouchableNativeFeedback
          onPress={navigation.reset({
            index: 0,
            routes: [
              { name: "Welcome" },
              { name: "Login" },
            ],
          })}
        >
          <View style={[styles.button, styles.buttonBack]}>
            <Text style={[styles.buttonText, styles.buttonTextDark]}>
              VOLTAR PARA A TELA DE LOGIN
            </Text>
          </View>
        </TouchableNativeFeedback>
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
    marginTop: 35,
  },

  buttonTextDark: {
    color: "#6c6c80",
  },
});
