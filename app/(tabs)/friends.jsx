import { View, StyleSheet } from 'react-native';

const myProfileID = '1';

export default function Friends() {
  return (
    <View style={styles.default_container}>
        ---- Friends to go here ----
        my_name (ID = {myProfileID})

        <br></br>
        <br></br>
        Friend 1<br></br>
        Friend 2<br></br>
        Friend 3<br></br>
        Friend 4<br></br>
    </View>
  );
}

const styles = StyleSheet.create({
  default_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    padding: 20,
    backgroundColor: '#8d9093', //nicer on the eyes  - lighter
  },
});
