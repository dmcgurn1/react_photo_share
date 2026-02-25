import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const myProfileID = '1';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <View>
        <Link href={"/profile/"+myProfileID}><Text style={styles.text}> - Profile</Text></Link>
      </View>

      <View>
        <Link href="/friends"><Text style={styles.text}> - Add Friend</Text></Link>
      </View>

      <br></br>

      <View>
        <Link href="/about"><Text style={styles.text}> - About</Text></Link>
      </View>
      
      <View>
        <Link href="https://www.github.com"><Text style={styles.text}> - GitHub</Text></Link>
      </View>

      <View>
        <Link href="https://docs.expo.dev/tutorial/create-your-first-app/"><Text style={styles.text}> - Expo Docs (Tutorial) (Learn ➜ create-your-first-app)</Text></Link>
      </View>

      <View>
        <Link href="https://docs.expo.dev/"><Text style={styles.text}> - Expo Docs</Text></Link>
      </View>
      
      <View>
        <Link href="https://ionic.io/ionicons"><Text style={styles.text}> - ionicons</Text></Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 50,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 35
  },
});