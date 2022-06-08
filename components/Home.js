import { Text, FlatList, View, Button } from 'react-native';
import { useState } from 'react';
import customer from '../customer/customer.js'

const Home = ({ navigation }) => {

    const [customerState, setcustomeState] = useState(customer)

    console.log(customerState.customers[0])

    return (
        <>
            <Text>List of Customers</Text>
            <View>
                <FlatList
                    keyExtractor={(item) => item.cell}
                    data={customerState.customers}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name.first}</Text>
                            <Button onPress={() => navigation.navigate('Profile', { customer: item })} title="See profile" />
                        </View>
                    )} />
            </View>
        </>
    )
};

export default Home;