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