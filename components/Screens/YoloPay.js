import React from 'react';
import { View, Text, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'twrnc';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { faker } from '@faker-js/faker';
import LinearGradient from 'react-native-linear-gradient';

var cardData = [
    {
        id: 1,
        creditCardNumber: faker.finance.creditCardNumber('visa').replace(new RegExp('-', 'g'), ' ',),
        creditCardCVV: faker.finance.creditCardCVV(),
        creditCardExpiry: '01/2028',
    }
];

const ShowCard = () => cardData.map((item, key) => {
    const [showCVV, setShowCVV] = React.useState(false);
    
    return (
        <View key={key} style={tw`flex-row my-5 `}>
            <Text style={[tw`w-[50%] text-white text-6`, { fontFamily: 'OCR-A', }]}>
                {
                    item.creditCardNumber.length === 19?
                        item.creditCardNumber
                        :
                        item.creditCardNumber = faker.finance.creditCardNumber('visa').replace(new RegExp('-', 'g'), ' ',)
                }
            </Text>
            <View>
                <Text style={tw`text-gray-300 text-[17px]`}>expiry</Text>
                <Text style={[tw`text-white text-6`,{fontFamily:'OCR-A'}]}>{item.creditCardExpiry}</Text>
                <Text style={tw`text-gray-300 text-[17px]`}>CVV</Text>
                {
                    showCVV ?
                        <View style={tw`flex-row items-center`}>
                            <Text style={[tw`text-gray-300 mr-2 text-6`,{fontFamily:'OCR-A'}]}>{item.creditCardCVV}</Text>
                            <Ionicon onPress={()=> setShowCVV(false)} name='eye-outline' color={'#d1d5db'} size={25} />
                        </View>
                        :
                        <View style={tw`flex-row items-center`}>
                            <Text style={[tw`text-gray-300 text-6 mr-4`,{fontFamily:'OCR-A'}]}>***</Text>
                            <Ionicon onPress={()=> setShowCVV(true)} name='eye-off-outline' color={'red'} size={25} />
                        </View>
                }
            </View>
        </View>
    )
})

const CustomButton = ({ text, color }) => {
    return (
        <Pressable style={[tw`h-10 ml-2 w-[30%] justify-center`, { borderTopWidth: 1.5, borderLeftWidth: 0.7, borderRightWidth: 0.7, borderBottomWidth: 0, borderRadius: 100, borderColor: `${color}` }]}>
            <Text style={[tw`text-[20px]  text-center`, { color: `${color}` }]}>{text}</Text>
        </Pressable>
    )
}

const YoloPay = () => {

    const [isFreeze, setIsFreeze] = React.useState(true)

    return (
        <View style={tw`flex-1 bg-black pt-1 pl-1`}>
            <Text style={tw`text-white text-[25px]`}>select payment mode</Text>
            <Text style={tw`text-gray-300 text-[20px] pt-4`}>choose your preferred payment method to make payment.</Text>
            <View style={tw`flex flex-row mt-7`}>
                <CustomButton text={'pay'} color={'white'} />
                <CustomButton text={'card'} color={'red'} />
            </View>
            <Text style={tw`text-gray-500 mt-10 py-4`}>YOUR DIGITAL DEBIT CARD</Text>
            <View style={tw`ml-2`}>
                {
                    isFreeze ?
                        <View style={tw`flex-row items-center`}>
                            <LinearGradient
                                colors={['white', '#EBE3D5', 'gray', 'rgba(20,20,20,0.7)', 'gray', '#EBE3D5', 'white']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                locations={[0, 0.01, 0.07, 0.5, 0.93, 0.99, 1]}
                                style={tw`h-[330px] w-[60%] rounded-[30px]`}
                            >
                                <Image source={require('../../assets/images/freeze.jpg')} style={tw`h-[330px] w-[100%] rounded-[30px] opacity-20`} />
                            </LinearGradient>
                            <TouchableOpacity onPress={() => setIsFreeze(!isFreeze)} style={tw`ml-3`}>
                                <View style={tw`w-[60px] h-60px justify-center items-center border-t-[1px] border-l-[0.7px] border-r-[0.7px] border-b-[0px] border-red-900 rounded-[99]`}>
                                    <Ionicon style={tw``} name='snow' color={'red'} size={30} />
                                </View>
                                <Text style={tw`mt-5 text-center text-red-600`}>unfreeze</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={tw`flex-row items-center`}>
                            <View style={tw`h-[330px] w-[60%] rounded-[20px] border-2 border-gray-900 p-3`}>
                                <View style={tw`flex-row justify-between`}>
                                    <Image source={require('../../assets/images/yolo.png')} style={tw`w-[70px] h-[50px] -ml-2`} />
                                    <Image source={require('../../assets/images/yesbank.png')} style={tw`w-[100px] h-[40px] `} />
                                </View>
                                <ShowCard />
                                <TouchableOpacity style={tw`flex-row items-center`}>
                                    <AntDesign name='copy1' color={'#f00'} size={17} />
                                    <Text style={tw`text-[17.5px] text-[#f00] ml-1`}>copy details</Text>
                                </TouchableOpacity>
                                <View style={tw`flex-1 items-end justify-end `}>
                                    <Image style={tw`w-[100px] h-[45px]`} source={require('../../assets/images/rupay.png')} />
                                    <Text style={tw`text-white pr-2 text-5 italic font-normal`}>PREPAID</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setIsFreeze(!isFreeze)} style={tw`ml-3`}>
                                <View style={tw`w-[60px] h-60px justify-center items-center border-t-[1px] border-l-[0.7px] border-r-[0.7px] border-b-[0px] border-gray-700 rounded-[99]`}>
                                    <Ionicon style={tw``} name='snow' color={'white'} size={30} />
                                </View>
                                <Text style={tw`mt-5 text-center text-white`}>freeze</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </View>
    )
}

export default YoloPay;