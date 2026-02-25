import { StyleSheet, View, TouchableOpacity  } from "react-native";
import { Link, Stack } from 'expo-router';

const myProfileID = '1';
const myUserName = "spoudaios|spoudaîos|σπουδαῖος";
const myProfileRoute = '/profile/' + myProfileID;

const tempUserID = '2';
const tempUserName = "profile n";
const tempProfileRoute = '/profile/' + tempUserID;

export default function ProfileFetch () {
    return (
        <View style={styles.default_container}>
          <View>
              /profile/{tempUserID}
              <br></br>
              Welcome to your profile, <br></br>{tempUserName}
          </View>

          <View>
            <TouchableOpacity>
              <View style={{padding:'10'}}>
                <View><Link href={myProfileRoute}>Back to "my" profile</Link></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  default_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    padding: 20,
    backgroundColor: '#8d9093', //nicer on the eyes - lighter
  }
});

ProfileFetch();