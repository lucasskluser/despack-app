import React from "react";
import { useEffect } from "react";
import { Container, AppIcon } from "./styles";

export function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(
      () =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Welcome" }],
        }),
      2000
    );
  }, []);

  return (
    <Container>
      <AppIcon source={require("../../assets/despack-icon.png")} />
    </Container>
  );
}
