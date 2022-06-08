import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Profile = ({ route }) => {
  const { customer } = route.params;

  return (
    <SafeAreaView>
      <View style={styles.profile}>
        <Image style={styles.image} source={{ uri: customer.picture.large }} />
        <View>
          <View style={styles.textMargin}>
            <Text style={styles.info}>
              Name: {customer.name.first} {customer.name.last}
            </Text>
          </View>
          <View style={styles.textMargin}>
            <Text>Dob: {customer.dob.date}</Text>
          </View>
          <View style={styles.textMargin}>
            <Text>Phone: {customer.cell}</Text>
          </View>
          <View style={styles.textMargin}>
            <Text>Email: {customer.email}</Text>
          </View>
          <View style={styles.textMargin}>
            <Text>
              Address: {customer.location.street.number}{" "}
              {customer.location.street.name}
              {customer.location.street.number}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    paddingTop: 50,
    alignContent: 'center',
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: 'blue',
    margin: 30
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },

  info: {
    marginTop: 25,
  },
  textMargin: {
    marginBottom: 25,
  },
});
