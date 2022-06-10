import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import customer from "../customer/customer.js";
import { auth } from "../firebase-config.js";

const Home = ({ navigation }) => {
  const [customerState, setcustomerState] = useState(customer);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginVertical: 10 }}>List of Customers</Text>
      <FlatList
        testID="flatlist"
        style={styles.FlatList}
        keyExtractor={(item) => item.cell}
        data={customerState.customers}
        renderItem={({ item }) => (
          <View style={styles.customerContainer}>
            <Image
              style={styles.image}
              source={{ uri: item.picture.thumbnail }}
            />

            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Profile", { customer: item })}
            >
              <Text style={styles.buttonText}>See Profile</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3FBFB",
  },
  buttonContainer: {
    left: 140,
  },
  signOutButton: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 6,
    borderRadius: 10,
  },
  signOutButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  FlatList: {
    marginTop: 10,
  },
  customerContainer: {
    margin: 8,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#BAE8E8",
    padding: 9,
    borderRadius: 50,
  },
  name: {
    marginRight: 60,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#FFD803",
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    borderRadius: 150,
    color: "black",
    fontSize: 15,
  },
});
