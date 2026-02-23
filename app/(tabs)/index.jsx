import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const posts = [];

const placeholderFunction = () => {
  posts.push('photo123');
  console.log(posts);
};

const PlaceholderImage = require('@/assets/images/default_photo.jpg');

const App = () => {
  
  return (
    
    <View style={styles.appContainer}>
    
    <View style={styles.appContainerForeground}>
    
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', padding: 10}}>Dylanstagram</Text>
      
      <View style={{ alignSelf: 'end', right: '10%' }}>
        <TouchableOpacity onPress={placeholderFunction}>
          <View style={styles.button}>
            <Text>My Profile</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Post 1 */}
        {/* Metadata (username, timestamp) */}
        <View style={styles.postMetadata}>
          <Text style={{color: 'black', margin: 10}}>johnny.b</Text>
          <Text style={{color: 'black', margin: 10}}>2026-02-01 09:57:13</Text>
        </View>

        {/* Content - image */}
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>

      {/* </View> */}

      {/* "Add post" button */}
      
      {/* <View style={{ justifyContent: 'end', alignItems: 'end', margin: 50 }}> */}
        <TouchableOpacity onPress={placeholderFunction}>
          <View style={styles.button}>
            <Text>Add post</Text>
          </View>
        </TouchableOpacity>
        {/* </View> */}
        
      {/* "About app" button */}
        <TouchableOpacity onPress={placeholderFunction}>
          <View style={styles.button}>
            <Link href="/about">About app</Link>
          </View>
        </TouchableOpacity>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '100%',
    width: '50%',
  },
  appContainerForeground: {
    flexDirection: 'column',
    width: '80%',
    height:'80%',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  scrollableTimeline: {
    width: 10,
    height: 10,
  },

  imageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
    margin: 10,
  },
  image: {
    width: '95%',
    height: '95%',
  },
  
  postMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    "margin-bottom": 10,
  },
});

export default App;