import React from "react";
import { Container, ContentContainer, Dropdown, Form, Header, Logo, Subheader, Watermark, WatermarkContainer } from "./style";

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
        <Logo resizeMode="contain" source={require("../../assets/despack-logo.png")} />
        <Header>
          Seu marketplace de coleta de resíduos.
        </Header>
        <Subheader>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Subheader>
      </ContentContainer>
    </Container>
  );
}
