import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Home = () =>{
    return(
        <View style={tw`bg-black flex-1`} >
            <Text style={tw`text-white`}>Home Screen</Text>
        </View>
    )
}

export default Home;