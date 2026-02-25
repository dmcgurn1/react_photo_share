import { StyleSheet, View, TouchableOpacity  } from "react-native";
import { Link, Stack } from 'expo-router';

const myProfileID = '1';
const myUserName = "spoudaios|spoudaîos|σπουδαῖος";
const myProfileRoute = '/profile/' + myProfileID;

const tempUserID = '2';
const tempUserName = "profile n";
const tempProfileRoute = '/profile/' + tempUserID;

export default function MyProfile () {
    return (
        <>
        <Stack.Screen options={{ title: 'MyProfile' }} />
        <View style={styles.default_container}>
        <View>
            /profile/{myProfileID}
            <br></br>
            Welcome to your profile, <br></br>{myUserName}
        </View>

        <View>
          <TouchableOpacity>
            <View style={{padding:'10'}}>
              <View><Link href={tempProfileRoute}>Link to other profile</Link></View>
            </View>
          </TouchableOpacity>
        </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
  default_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    padding: 20,
  }
});

MyProfile();