import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const posts = [];

const go_home = () => {
  posts.push('photo123');
  console.log(posts);
};

const PlaceholderImage = require('@/assets/images/default_photo.jpg');

const App = () => {
  
  return (
    
    <View style={styles.AppContainerBackground} >
    
      <View style={styles.AppContainerForeground}>
      
        <View style={styles.TitleContainer}>

          <Text style={styles.AppTitle}>Dylanstagram</Text> {/* Don't deploy to prod with this... */}
          {/* <Text style={styles.AppTitle}>react_photo_share</Text> */}
        </View>

        {/* Goofing */}
        <Text style={styles.AppTitleWingdingsMedium}>(react_photo_share)</Text>
        <Text style={styles.AppTitleWingdingsLessMedium}>Reminiscient of early Instagram</Text>
        
        {/* Top right profile button */}
        <View style={{ position: 'absolute', top: '3%', right: '10%' }}>
          <TouchableOpacity onPress={go_home}>
            <View style={styles.button}>
              <Ionicons name="person" size={'300%'} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Top left home button */}
        <View style={{ position: 'absolute', top: '3%', left: '10%' }}>
          <TouchableOpacity onPress={go_home}>
            <View style={styles.button}>
              <Ionicons name="home" size={'300%'} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        
        {/* Placeholder Post 1 */}
          {/* Metadata (username, timestamp) */}
        <View style={styles.postMetadataContainer}>
          <Text style={styles.postInfoText}>johnny.b</Text>
          <Text style={styles.postInfoText}>2026-02-01 09:57:13</Text>
        </View>        
        
        {/* Content - image */}
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>

        {/* Placeholder Post 2 */}
          {/* Metadata (username, timestamp) */}
        <View style={styles.postMetadataContainer}>
          <Text style={styles.postInfoText}>johnny.b</Text>
          <Text style={styles.postInfoText}>2026-02-01 09:00:00</Text>
        </View>        
        
        {/* Content - image */}
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>

        {/* </View> */}

        {/* "Add post" button */}
        
        {/* <View style={{ justifyContent: 'end', alignItems: 'end', margin: 50 }}> */}
          
          
          {/* <TouchableOpacity onPress={placeholderFunction}>
            <View style={styles.button}>
              <Text>Add post</Text>
            </View>
          </TouchableOpacity> */}
          
          {/* </View> */}
          
        {/* "About app" button */}
          
          {/* <TouchableOpacity onPress={placeholderFunction}>
            <View style={styles.button}>
              <Link href="/about">About app</Link>
            </View>
          </TouchableOpacity> */}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  // Structural:
  AppContainerBackground: {
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '100%',
    width: '100%',
  },
  
  AppContainerForeground: {
    flexDirection: 'column',
    width: '100%',
    height:'100%',
    // width: '90%', // debugging
    // height:'90%', // debugging
    // // backgroundColor: 'orange', // debugging
    backgroundColor: 'salmon', //debugging
    // backgroundColor: 'white',
    alignItems: 'center',
  },

  // App Title (x4)
  AppTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
    marginBottom: 0,
    fontFamily: 'Comic Sans MS',
  },

  // AppTitleWingdings: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   color: 'black',
  //   padding: 5,
  //   fontFamily: 'Wingdings',
  // },

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
    // fontWeight: 'bold',
    color: 'black',
    // padding: 50,
    marginBottom: 20, // Last title element used therefore we pad 20 to have post slightly separated from app title.
    fontFamily: 'Wingdings',
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
    
    // backgroundColor: 'salmon', # debugging
  },

  postInfoText: {
    color: 'black', 
    margin: 10,
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Impact',
  },

  // End of "elements"
  
  // Pressables
  button: {
    // backgroundColor: '#2196F3',
    backgroundColor: 'white',
    padding: 10,
    "margin-bottom": 10,
  },
});

export default App; 