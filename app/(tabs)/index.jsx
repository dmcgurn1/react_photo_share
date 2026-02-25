//home page
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const posts = [];

const placeholderFunction = () => {
  posts.push('photo123');
  console.log(posts);
};

const PlaceholderImage = require('@/assets/images/default_photo.jpg');
const myProfileID = '1';

const postX = () => {
  return (
    // {/* Placeholder Post 1 */}
    // {/* Metadata (username, timestamp) */}
    <View style={styles.TimelineContainer}>
      <View style={styles.postMetadataContainer}>
        <Text style={styles.postMetadataText}>johnny.b</Text>
        <Text style={styles.postMetadataText}>2026-02-01 09:57:13</Text>
      </View>        
      
      {/* Content - image */}
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      {/* Placeholder Post 2 */}
      {/* Metadata (username, timestamp) */}
      <View style={styles.postMetadataContainer}>
        <Text style={styles.postMetadataText}>johnny.b</Text>
        <Text style={styles.postMetadataText}>2026-02-01 09:00:00</Text>
      </View>        
      
      {/* Content - image */}
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
    );
};

const App = () => {
  
  return (
    
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.AppContainerBackground} >
    
      <View style={styles.AppContainerForeground}>
        
        <View style={styles.AppTitleContainer}>

          <Text style={styles.AppTitle}>Dylanstagram</Text> {/* Don't deploy to prod with this... */}
          {/* <Text style={styles.AppTitle}>react_photo_share</Text> */}
          {/* Goofing */}
          <Text style={styles.AppTitleWingdingsMedium}>(react_photo_share)</Text>
          <Text style={styles.AppTitleWingdingsLessMedium}>Reminiscient of early Instagram</Text>
        </View>
        
        {/* Top right profile button */}
        <View style={{ position: 'absolute', top: '3%', right: '10%' }}>
          <TouchableOpacity onPress={placeholderFunction}>
            <View style={styles.button}>
              <Ionicons name="person" size={'300%'} color="black" />
              <View><Link href={'/profile/' + myProfileID}>My Profile</Link></View>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.TimelineContainer}> </View>*/ }         
        
        {postX()};

        </View>
    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  // Structural:
  AppContainerBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // backgroundColor: 'grey',
    backgroundColor: '#25292e', // nicer on the eyes
  },
  
  AppContainerForeground: {
    flexDirection: 'column',
    width: '100%',
    height:'100%',
    alignItems: 'center',
    // backgroundColor: 'white',
    backgroundColor: '#25292e', // nicer on the eyes
  },

  TimelineContainer: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    backgroundColor: '#25292e', // nicer on the eyes
  },

  AppTitleContainer: {
    height: '10%',
    margin: 20,
    alignItems: 'center',
  },

  AppTitle: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    padding: 5,
  },

  AppTitleWingdingsMedium: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Wingdings',
    fontWeight: 'bold',
    padding: 5,
  },

  AppTitleWingdingsLessMedium: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Wingdings',
  },

  // posts on timeline
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '70%',
    margin: 10,
    backgroundColor: 'lightgrey',
    marginBottom: '5%',
  },

  image: {
    width: '95%',
    height: '95%',
  },
  
  postMetadataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'salmon', // parameterise?
  },

  postMetadataText: {
    color: 'black', 
    margin: 10,
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Impact', // parameterise?
  },

  // Pressables
  button: {
    // backgroundColor: '#2196F3', //parameterise?
    // backgroundColor: 'white',
    backgroundColor: '#25292e', // nicer on the eyes
    // padding: 10,
    "margin-bottom": 10,
  },
});

export default App; 