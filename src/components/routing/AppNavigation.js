import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Sign from '../AuthScreen/Sign';
import SignUp from '../AuthScreen/SignUp';
import SwipeList from '../AuthScreen/SwipeList';
import Profile from '../AuthScreen/Profile';
import Messages from '../AuthScreen/Messages';
import Msgs from '../AuthScreen/Msgs';
import CameraProfile from '../AuthScreen/CameraProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../AuthScreen/Notifications';
import Home from '../AuthScreen/Home';
import { Icons, nf, hpx, wpx, hp, wp } from '../../constants/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={Notifications}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "#FFFFFF",
                    height: hpx(56),
                    borderTopWidth: 1,
                    borderColor: "#DBDBDB",
                }
            }}
        >
            <Tab.Screen
                name="CameraProfile"
                component={CameraProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabContainer}>
                            <Image source={Icons.magnify}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#606060" : "#C1C1C1"
                                }}
                            />
                            <Text style={{ color: focused ? "#606060" : "#C1C1C1", fontSize: 9, fontFamily: "Roboto-Regular" }} >Home/Search</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabContainer}>
                            <Image source={Icons.hospital}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#606060" : "#C1C1C1"
                                }}
                            />
                            <Text style={{ color: focused ? "#606060" : "#C1C1C1", fontSize: 9, fontFamily: "Roboto-Regular" }} >MyClinic</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabContainer}>
                            <Image source={Icons.heartbeat}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#606060" : "#C1C1C1"
                                }}
                            />
                            <Text style={{ color: focused ? "#606060" : "#C1C1C1", fontSize: 9, fontFamily: "Roboto-Regular" }} >Favourite Doctor/Clinic</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabContainer}>
                            <Image source={Icons.notification}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#606060" : "#C1C1C1"
                                }}
                            />
                            <Text style={{ color: focused ? "#606060" : "#C1C1C1", fontSize: 9, fontFamily: "Roboto-Regular" }} >Notification</Text>
                        </View>
                    ),
                    // tabBarLabel: "Notification"
                }}
            />

            <Tab.Screen
                name="Msgs"
                component={Msgs}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabContainer}>
                            <Image source={Icons.avatar}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#606060" : "#C1C1C1"
                                }}
                            />
                            <Text style={{ color: focused ? "#606060" : "#C1C1C1", fontSize: 9, fontFamily: "Roboto-Regular" }} >My Account</Text>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="AppTab" component={AppTab} /> */}
                <Stack.Screen name="CameraProfile" component={CameraProfile} />
                <Stack.Screen name="Msgs" component={Msgs} />
                <Stack.Screen name="Messages" component={Messages} />

                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Notifcations" component={Notifications} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({
    tabContainer: {
        alignItems: "center",
        justifyContent: "center",
        top: 5
    }

})

export default AppNavigation;