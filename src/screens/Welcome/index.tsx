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

export function Welcome() {
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
            <RectButton style={styles.button}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#FFF" size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>Buscar</Text>
            </RectButton>
          </Form>
        </KeyboardAvoidingView>
      </ContentContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#34CB79",
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
});
