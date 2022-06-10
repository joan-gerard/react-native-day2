import {
  Text,
  FlatList,
  View,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useState } from "react";
import customer from "../customer/customer.js";

const Home = ({ navigation }) => {
  const [customerState, setcustomeState] = useState(customer);

  return (
    <SafeAreaView style={styles.container}>
      <Text>List of Customers</Text>
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
