import {
  getCurrentPositionAsync,
  getForegroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  ToastAndroid,
} from "react-native";
import MapView, { MAP_TYPES, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  ChangeLocationButton,
  ChangeLocationText,
  Header,
  ItemList,
  ItemListIcon,
  ItemListTitle,
  List,
  Location,
  LocationName,
  LocationSpan,
  MarkerContainer,
  MarkerImage,
  MarkerName,
  MarkerPin,
  MarkerWrapper,
} from "./style";

export function Map() {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const [collectPoints, setCollectPoints] = useState([{}]);

  const updateRegion = async () => {
    const currentPosition = await getCurrentPositionAsync({ accuracy: 4 });
    setRegion({
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    });

    setCollectPoints([
      {
        name: "Ponto A",
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      },
    ]);
  };

  useEffect(() => {
    const permission = getForegroundPermissionsAsync();
    permission.then((permissionStatus) => {
      if (permissionStatus.granted) {
        updateRegion().catch((err) => console.error(err));
      } else if (permissionStatus.canAskAgain) {
        const permissionRequest = requestForegroundPermissionsAsync();
        permissionRequest.then((permissionResponse) => {
          if (permissionResponse.granted) {
            updateRegion().catch((err) => console.error(err));
          } else {
            ToastAndroid.show(
              "Not authorized to use location!",
              ToastAndroid.SHORT
            );
          }
        });
      } else {
        ToastAndroid.show(
          "Not authorized to use location!",
          ToastAndroid.SHORT
        );
      }
    });
  }, []);

  const items = [
    {
      name: "Resíduos eletrônicos",
      icon: require("../../assets/icons/eletronicos.png"),
    },
    {
      name: "Resíduos orgânicos",
      icon: require("../../assets/icons/organicos.png"),
    },
    {
      name: "Óleo de cozinha",
      icon: require("../../assets/icons/oleo.png"),
    },
    {
      name: "Lâmpadas",
      icon: require("../../assets/icons/lampadas.png"),
    },
    {
      name: "Pilhas e baterias",
      icon: require("../../assets/icons/baterias.png"),
    },
    {
      name: "Papéis e papelão",
      icon: require("../../assets/icons/papeis.png"),
    },
  ];

  return (
    <>
      <Header style={styles.headerShadow}>
        <Location>
          <LocationSpan>Buscando pontos de coleta em</LocationSpan>
          <LocationName>Blumenau, Santa Catarina</LocationName>
        </Location>
        <TouchableNativeFeedback>
          <ChangeLocationButton>
            <ChangeLocationText>Alterar</ChangeLocationText>
          </ChangeLocationButton>
        </TouchableNativeFeedback>
      </Header>
      <List horizontal={true} style={{ zIndex: 2 }}>
        {items.map((item, index) => (
          <TouchableNativeFeedback key={index}>
            <ItemList
              style={{
                marginLeft: index == 0 ? 20 : 0,
                marginRight: 20,
                elevation: 10,
                marginBottom: 25,
              }}
            >
              <ItemListIcon source={item.icon} />
              <ItemListTitle>{item.name}</ItemListTitle>
            </ItemList>
          </TouchableNativeFeedback>
        ))}
      </List>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        region={region}
        mapType={MAP_TYPES.STANDARD}
      >
        {collectPoints.length > 0 &&
          collectPoints.map((collectPoint: any, index) => {
            <Marker
              coordinate={{
                latitude: collectPoint.latitude,
                longitude: collectPoint.longitude,
              }}
              onPress={() =>
                ToastAndroid.show(collectPoint.name, ToastAndroid.SHORT)
              }
              key={index}
            >
              <MarkerWrapper>
                <MarkerContainer>
                  <MarkerImage
                    source={require("../../assets/icons/ponto-a.png")}
                  />
                  <MarkerName>{collectPoint.name}</MarkerName>
                </MarkerContainer>
                <MarkerPin
                  source={require("../../assets/icons/marker-pin.png")}
                />
              </MarkerWrapper>
            </Marker>;
          })}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    zIndex: 0,
  },
  headerShadow: {
    shadowColor: "#000000",
    elevation: 10,
  },
  marginRightItemList: {
    marginRight: 10,
  },
});
