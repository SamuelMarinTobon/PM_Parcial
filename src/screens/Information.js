import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function Information() {
  const navigation = useNavigation();
  const [DATA, setData] = useState([]);
  const urlBase = 'https://api.fbi.gov/wanted/v1/list?poster_classification=information';
  const obtenerDatos = () => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <Image source={{ uri: item.images[0]?.thumb }} style={styles.image} />
            <View style={styles.titleContainer}>
              <Text style={styles.text}> {item.title}</Text>
            </View>

            <Button
              title='Ver más'
              onPress={() =>
                navigation.navigate('Stack', { title: item.title, details: item.details, image: item.images[0]?.thumb })
              }
              color='gray'
            />
          </View>
        )}
      />
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dataContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold', //negrita
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
});
