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
  Text,
} from "react-native";
import MapView, { MAP_TYPES, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { APIService } from "../../services/api.service";
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
  MarkerCard,
  MarkerCardAddress,
  MarkerCardTitle,
  MarkerContainer,
  MarkerImage,
  MarkerName,
  MarkerPin,
  MarkerWrapper,
} from "./style";

export function Map({ navigation, route }) {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const [collectPoints, setCollectPoints] = useState([
    {
      id: 0,
      latitude: 0,
      longitude: 0,
      name: "",
      image: 0,
      category: 0,
    },
  ]);

  const [showMarkers, setShowMarkers] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedPoint, setSelectedPoint] = useState({});

  const updateRegion = async () => {
    const currentPosition = await getCurrentPositionAsync({ accuracy: 4 });

    setRegion({
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    });
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

    const apiService = new APIService();
    const collectPointsRequest = apiService.getCollectPoints(
      route.params.token
    );

    collectPointsRequest.then((response) => setCollectPoints(response));
  }, []);

  const categories = [
    {
      id: 1,
      name: "Resíduos eletrônicos",
      icon: require("../../assets/icons/eletronicos.png"),
    },
    {
      id: 2,
      name: "Resíduos orgânicos",
      icon: require("../../assets/icons/organicos.png"),
    },
    {
      id: 3,
      name: "Óleo de cozinha",
      icon: require("../../assets/icons/oleo.png"),
    },
    {
      id: 4,
      name: "Lâmpadas",
      icon: require("../../assets/icons/lampadas.png"),
    },
    {
      id: 5,
      name: "Pilhas e baterias",
      icon: require("../../assets/icons/baterias.png"),
    },
    {
      id: 6,
      name: "Papéis e papelão",
      icon: require("../../assets/icons/papeis.png"),
    },
  ];

  const toggleCategory = (categoryId: number, selected: boolean) => {
    console.log(categoryId, collectPoints);

    if (selected) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      const index = selectedCategories.findIndex((id) => id == categoryId);
      selectedCategories.splice(index, 1);
      setSelectedCategories([...selectedCategories]);
    }

    if (selectedPoint.id) {
      setSelectedPoint({});
    }
  };

  return (
    <>
      <Header style={styles.headerShadow}>
        <Location>
          <LocationSpan>Buscando pontos de coleta em</LocationSpan>
          <LocationName>Jaraguá do Sul, Santa Catarina</LocationName>
        </Location>
        <TouchableNativeFeedback disabled={true}>
          <ChangeLocationButton>
            <ChangeLocationText>Alterar</ChangeLocationText>
          </ChangeLocationButton>
        </TouchableNativeFeedback>
      </Header>
      {!selectedPoint.id && (
        <CategoriesList
          categories={categories}
          selectCategory={toggleCategory}
          selectedCategories={selectedCategories}
        />
      )}
      {selectedPoint.id && (
        <MarkerCard style={{ elevation: 20 }}>
          <MarkerCardTitle>{selectedPoint.nome}</MarkerCardTitle>
          <MarkerCardAddress>{selectedPoint.endereco.logradouro}, {selectedPoint.endereco.numero}</MarkerCardAddress>
        </MarkerCard>
      )}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        region={region}
        mapType={MAP_TYPES.STANDARD}
        onMapReady={() => setShowMarkers(true)}
        onPress={() => setSelectedPoint({})}
        followsUserLocation={false}
      >
        {showMarkers && (
          <MapMarkerList
            mapMarkers={collectPoints}
            selectedCategories={selectedCategories}
            selectMarker={setSelectedPoint}
          />
        )}
      </MapView>
    </>
  );
}

function MapMarkerList({ mapMarkers, selectedCategories, selectMarker }) {
  return mapMarkers
    .filter((mapMarker) =>
      selectedCategories.some((item) => mapMarker.tipoResiduos.map(m => m.id).includes(item))
    )
    .map((collectPoint: any, index: number) => {
      console.log(collectPoint);

      return (
        <MapMarker
          collectPoint={collectPoint}
          select={selectMarker}
          key={index}
        ></MapMarker>
      )
    });
}

function MapMarker({ collectPoint, select }) {
  return (
    <Marker
      coordinate={{
        latitude: collectPoint.endereco.latitude,
        longitude: collectPoint.endereco.longitude,
      }}
      onPress={() => select(collectPoint)}
    >
      <MarkerWrapper>
        <MarkerContainer>
          {/* <MarkerImage source={collectPoint.foto} /> */}
          <MarkerName>{collectPoint.nome}</MarkerName>
        </MarkerContainer>
        <MarkerPin source={require("../../assets/icons/marker-pin.png")} />
      </MarkerWrapper>
    </Marker>
  );
}

function CategoriesList({ categories, selectCategory, selectedCategories }) {
  return (
    <List horizontal={true} style={{ zIndex: 2 }}>
      {categories.map((category, index) =>
        Category(
          category,
          index,
          selectCategory,
          selectedCategories.includes(category.id)
        )
      )}
    </List>
  );
}

function Category(item, index, select, initialSelectedState) {
  const [selected, setSelected] = useState(initialSelectedState);

  const handleSelect = () => {
    setSelected(!selected);
    select(item.id, !selected, index);
  };

  return (
    <TouchableNativeFeedback key={index} onPress={handleSelect}>
      <ItemList
        style={{
          marginLeft: index == 0 ? 20 : 0,
          marginRight: 20,
          elevation: 10,
          marginBottom: 25,
          backgroundColor: selected ? "#DBF7FF" : "#ffffff",
        }}
      >
        <ItemListIcon source={item.icon} />
        <ItemListTitle>{item.name}</ItemListTitle>
      </ItemList>
    </TouchableNativeFeedback>
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
