import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Ginie = () =>{
    return(
        <View style={tw`bg-black flex-1`} >
            <Text style={tw`text-white`}>Ginie Screen</Text>
        </View>
    )
}

export default Ginie;