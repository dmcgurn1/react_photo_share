import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View><Ionicons name="camera-outline" size={'300%'} color="royalblue" /></View>
      <Text style={styles.text}>About screen (Work in progress 👷🚧)<br></br>
        Welcome to react_photo_share - an attempt to recreate the early days of a non-explicitly named photo-sharing mobile application...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 35
  },
});