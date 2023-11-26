import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';

import Home from './Screens/Home';
import YoloPay from './Screens/YoloPay';
import Ginie from './Screens/Ginie';



const Tabs = createBottomTabNavigator();

function CustomeTabBar({ state, descriptors, navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const setMargin = (100 - windowWidth)
    return (
        <LinearGradient
            colors={['black', 'black', 'white', 'black', 'black']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            locations={[0,0.25,0.5,0.75,1]}
            style={[tw`items-center `, { height: windowWidth, marginBottom: setMargin, borderTopWidth: 1.5, borderLeftWidth: 0.7, borderRightWidth: 0.7, borderBottomWidth: 0, borderTopLeftRadius: 999, borderTopRightRadius: 999, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, transform: [{ scaleX: 2 }] }]}
        >
            <View style={[tw`bg-black mt-[2px]`,{ height: windowWidth, marginBottom: setMargin, borderTopLeftRadius: 999, borderTopRightRadius: 999, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}>
                <View style={[tw`p-3`, { flexDirection: 'row', width: windowWidth, transform: [{ scaleX: 0.5 }] }]}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                key={index}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={tw`flex-1 items-center justify-end`}
                            >
                                <View style={[tw`items-center justify-center`, { borderTopWidth: 1.5, borderLeftWidth: 0.7, borderRightWidth: 0.7, borderBottomWidth: 0, borderRadius: 100, borderColor: isFocused ? 'white' : 'gray', height: label === 'YoloPay' ? 60 : 40, width: label === 'YoloPay' ? 60 : 40, }]}>
                                    {
                                        label === 'Home' ?
                                            <Ionicon name='home' color={isFocused ? 'white' : 'gray'} size={20} />
                                            :
                                            label === 'YoloPay' ?
                                                <MaterialIcons name='qr-code-scanner' color={isFocused ? 'white' : 'gray'} size={30} />
                                                : <MaterialCommunityIcons name='brightness-percent' color={isFocused ? 'white' : 'gray'} size={20} />
                                    }
                                </View>
                                <Text style={{ color: isFocused ? 'white' : 'gray' }}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </LinearGradient>
    );
}

const AppRoutes = () => {
    return (
        <Tabs.Navigator
            initialRouteName='YoloPay'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',

            }}
            tabBar={(props) => <CustomeTabBar {...props} />}
        >
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="YoloPay" component={YoloPay} />
            <Tabs.Screen name="Ginie" component={Ginie} />
        </Tabs.Navigator>
    )
}

export default AppRoutes;