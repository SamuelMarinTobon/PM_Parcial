import { useRoute } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function StackScreen() {
  const route = useRoute();
  const { title, details, image } = route.params;
  return (
    <View style={styles.principalContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold', //negrita
  },
  details: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold', //negrita
  },
});
