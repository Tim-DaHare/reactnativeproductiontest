import React from 'react'
import { View, Text } from 'react-native'
import { style } from '../styles'

const Navigation = () => (
    <View style={style.navigation__container}>
        <View style={style.navigation__button}><Text>Home</Text></View>
        <View style={style.navigation__button}><Text>Places</Text></View>
        <View style={style.navigation__button}><Text>Live</Text></View>
        <View style={style.navigation__button}><Text>Profile</Text></View>
    </View>
)

export default Navigation