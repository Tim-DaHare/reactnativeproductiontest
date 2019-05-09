/**
 * @format
 * @flow
 */

import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { NativeRouter, Route, Link } from "react-router-native";
import { View, Text } from 'react-native'
import { style } from './styles'

import Navigation from './components/navigation'

const HomeScreen = () => (
    <View style={style.app__container}>
        <Text>Home</Text>
    </View>
)

const PlacesScreen = () => (
    <View style={style.app__container}>
        <Text>Places</Text>
    </View>
)

const LiveScreen = () => (
    <View style={style.app__container}>
        <Text>Live</Text>
    </View>
)

const ProfileScreen = () => (
    <View style={style.app__container}>
        <Text>Profile</Text>
    </View>
)
    
// const AppNavigator = createBottomTabNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//             navigationOptions: () => ({
//                 title: 'Home'
//             })
//         },
//         Places: {
//             screen: PlacesScreen,
//             navigationOptions: () => ({
//                 title: 'Places'
//             })
//         },
//         Live: {
//             screen: LiveScreen,
//             navigationOptions: () => ({
//                 title: 'Live'
//             })
//         },
//         Profile: {
//             screen: ProfileScreen,
//             navigationOptions: () => ({
//                 title: 'Profile'
//             })
//         },
//     },
//     {
//         initialRouteName: 'Home',
//     }
// )

// const App = createAppContainer(AppNavigator)

const App = () => (
    <NativeRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/places" component={PlacesScreen} />
        <Route path="/live" component={LiveScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Navigation />
    </NativeRouter>
)

export default App
