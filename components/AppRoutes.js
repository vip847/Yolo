import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';

import Home from './Screens/Home';
import YoloPay from './Screens/YoloPay';
import Ginie from './Screens/Ginie';



const Tabs = createBottomTabNavigator();

function CustomeTabBar({ state, descriptors, navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const setMargin = (1000-windowWidth)/2
    return (
        <View style={[tw`w-[1000px] h-[1000px] -mb-[900px] items-center `,{ marginLeft: -setMargin , borderTopWidth: 1.5, borderLeftWidth: 0.7, borderRightWidth: 0.7, borderBottomWidth: 0, borderColor: 'white', borderTopLeftRadius: 999, borderTopRightRadius: 999, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}>
            <View style={[,{ flexDirection: 'row', width: windowWidth }]}>
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
                            style={tw`flex-1 h-[100px] items-center justify-end`}
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