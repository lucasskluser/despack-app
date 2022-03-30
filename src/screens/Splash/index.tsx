import React from 'react';
import { Container, AppIcon } from "./styles";

export function Splash() {
  return (
    <Container>
      <AppIcon source={require('../../assets/despack-icon.png')} />
    </Container>
  )
}