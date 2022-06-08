import { View, Text, Image } from "react-native";
import React from "react";

const Profile = ({ route }) => {
  const { customer } = route.params;

  return (
    <View>
      <Text>
        Name: {customer.name.first} {customer.name.last}
      </Text>
      <Text>Cell: {customer.cell}</Text>
      <Text>Email: {customer.email}</Text>
      {/* <Image source={{ uri: "https://randomuser.me/api/portraits/men/34.jpg"}}></Image> */}
      <Image
        source={{ uri: customer.picture.large }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
};

export default Profile;
