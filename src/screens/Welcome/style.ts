import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f5;
`;

export const WatermarkContainer = styled.View`
  top: -80px;
  left: -180px;
  z-index: 1;
  position: absolute;
`;

export const Watermark = styled.Image`
  width: 520px;
  height: 520px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  top: 100px;
  height: 100%;
  z-index: 2;
  padding: 40px;
`;

export const Logo = styled.Image`
  width: 200px;
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 34px;
  color: #322153;
  margin-top: 50px;
`;

export const Subheader = styled.Text`
  font-size: 18px;
  color: #6c6c80;
  margin-top: 25px;
`;

export const Form = styled.View`
  margin-top: 50px;
`;

export const TextInput = styled.TextInput`
  height: 60px;
  background-color: #FFF;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 24px;
  font-size: 16px;
`;

export const RectButton = styled.Button`
  background-color: #34CB79;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;
