import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen (Work in progress 👷🚧)<br></br>
        Welcome to Dylanstagram - an attempt to recreate the early days of a non-explicitly named photo-sharing mobile application...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: '',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 35
  },
});