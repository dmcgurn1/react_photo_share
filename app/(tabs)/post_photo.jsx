import { View, StyleSheet, Text } from 'react-native';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/please_upload.png');

export default function PostPhoto() {
  return (
    <View style={styles.default_container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
