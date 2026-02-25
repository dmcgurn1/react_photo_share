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
    <View style={styles.AppContainerForeground}>
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
    
    <>
    <Stack.Screen options={{ headerShown: false }} />
    
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.AppContainerBackground} >
    
      <View style={styles.AppContainerForeground}>

        {/* timeline container? */}
        
        <View style={styles.TitleContainer}>

          <Text style={styles.AppTitle}>Dylanstagram</Text> {/* Don't deploy to prod with this... */}
          {/* <Text style={styles.AppTitle}>react_photo_share</Text> */}
        </View>

        {/* Goofing */}
        <Text style={styles.AppTitleWingdingsMedium}>(react_photo_share)</Text>
        <Text style={styles.AppTitleWingdingsLessMedium}>Reminiscient of early Instagram</Text>
        
        {/* Top right profile button */}
        <View style={{ position: 'absolute', top: '3%', right: '10%' }}>
          <TouchableOpacity onPress={placeholderFunction}>
            <View style={styles.button}>
              <Ionicons name="person" size={'300%'} color="black" />
              <View><Link href={'/profile/' + myProfileID}>My Profile</Link></View>
            </View>
          </TouchableOpacity>
        </View>
        
        {postX()};

      </View>
    
    </View>
    </ScrollView>
    
    </>
  );
};

const styles = StyleSheet.create({
  
  // Structural:
  AppContainerBackground: {
    alignItems: 'center',
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
  },
  
  AppContainerForeground: {
    flexDirection: 'column',
    width: '100%',
    height:'100%',
    // width: '90%', // debugging
    // height:'90%', // debugging
    backgroundColor: 'orange', // debugging
    // backgroundColor: 'salmon', //debugging
    backgroundColor: 'white',
    alignItems: 'center',
  },

  // App Titles (x3)
  AppTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
    marginTop: '10%',
    fontFamily: 'Comic Sans MS',
  },

  AppTitleWingdingsMedium: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
    marginBottom: 0,
    fontFamily: 'Wingdings',
  },

  AppTitleWingdingsLessMedium: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Wingdings',

    marginBottom: 20, // Last title element used therefore we pad 20 to have post slightly separated from app title.
  },

  // What we will call "elements" for now

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '70%',
    margin: 10,
    backgroundColor: 'lightgrey', // debugging
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

  // End of "elements"
  
  // Pressables
  button: {
    // backgroundColor: '#2196F3', //parameterise?
    backgroundColor: 'white',
    // padding: 10,
    "margin-bottom": 10,
  },
});

export default App; 