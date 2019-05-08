/**
 * @format
 * @flow
 */

import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import { style } from './styles'
import Navigation from './components/navigation.js'

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
    
const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: 'Home'
            })
        },
        Places: {
            screen: PlacesScreen,
            navigationOptions: () => ({
                title: 'Places'
            })
        },
        Live: {
            screen: LiveScreen,
            navigationOptions: () => ({
                title: 'Live'
            })
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: () => ({
                title: 'Profile'
            })
        },
    },
    {
        initialRouteName: 'Home',
        // tabBarComponent: props => {
        //     console.log('props', props)
        //     return (
        //         <View style={style.navigation__container}/>
        //     )
        // }
    }
)

export default createAppContainer(AppNavigator)
