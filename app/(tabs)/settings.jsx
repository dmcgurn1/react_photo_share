import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const myProfileID = '1';

export default function AboutScreen() {
  return (
    <View style={styles.default_container}>

      <View>
        <Link href={"/profile/"+myProfileID}><Text style={styles.default_text}> - Profile</Text></Link>
      </View>

      <View>
        <Link href="/friends"><Text style={styles.default_text}> - Add Friend</Text></Link>
      </View>

      <br></br>

      <View>
        <Link href="/about"><Text style={styles.default_text}> - About</Text></Link>
      </View>
      
      <View>
        <Link href="https://www.github.com"><Text style={styles.default_text}> - GitHub</Text></Link>
      </View>

      <View>
        <Link href="https://docs.expo.dev/tutorial/create-your-first-app/"><Text style={styles.default_text}> - Expo Docs (Tutorial) (Learn ➜ create-your-first-app)</Text></Link>
      </View>

      <View>
        <Link href="https://docs.expo.dev/"><Text style={styles.default_text}> - Expo Docs</Text></Link>
      </View>
      
      <View>
        <Link href="https://ionic.io/ionicons"><Text style={styles.default_text}> - ionicons</Text></Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  default_container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 50,
    padding: 20,
  },
  default_text: {
    color: '#fff',
    fontSize: 35
  },
});