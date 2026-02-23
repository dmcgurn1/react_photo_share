import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      {/* Top right profile button */}
        <View style={{ position: 'absolute', top: '3%', right: '10%' }}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Ionicons name="person" size={'300%'} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Top left home button */}
        <View style={{ position: 'absolute', top: '3%', left: '10%' }}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Ionicons name="home" size={'300%'} color="black" />
            </View>
          </TouchableOpacity>
        </View>

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