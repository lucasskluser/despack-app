import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  position: absolute;
  margin: 60px 20px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  height: 80px;
`;

export const Location = styled.View`
  padding: 20px 0 20px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const LocationSpan = styled.Text`
  color: #6c6c80;
`;

export const LocationName = styled.Text`
  color: #322153;
  font-weight: bold;
`;

export const ChangeLocationButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px 20px 30px;
  height: 100%;
`;

export const ChangeLocationText = styled.Text`
  color: #6c6c80;
  font-weight: bold;
  text-transform: uppercase;
`;

export const List = styled.ScrollView`
  position: absolute;
  bottom: 0;
`;

export const ItemList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 104px;
  height: 104px;
  padding: 14px;
  background-color: white;
`;

export const ItemListIcon = styled.Image`
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
`;

export const ItemListTitle = styled.Text`
  color: #322153;
  text-align: center;
`;

export const MarkerWrapper = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const MarkerContainer = styled.View`
  background-color: #00c5ff;
  border-radius: 10px;
  width: 96px;
`;

export const MarkerName = styled.Text`
  text-align: center;
  color: white;
  margin: 5px;
`;

export const MarkerImage = styled.Image`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 96px;
  height: 50px;
`;

export const MarkerPin = styled.Image`
  position: absolute;
  bottom: -6px;
  width: 18px;
  height: 18px;
`;

export const MarkerCard = styled.View`
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 10;
`;

export const MarkerCardTitle = styled.Text`
  font-weight: bold;
  color: #322153;
  font-size: 16px;
`;

export const MarkerCardAddress = styled.Text`
  color: #322153;
`;