import React from 'react'
import { View, Text } from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";
import { style } from '../styles'

const Navigation = () => (
    <View style={style.navigation__container}>
        <Link to="/" style={style.navigation__button}><Text>Home</Text></Link>
        <Link to="/places" style={style.navigation__button}><Text>Places</Text></Link>
        <Link to="/live" style={style.navigation__button}><Text>Live</Text></Link>
        <Link to="/profile" style={style.navigation__button}><Text>Profile</Text></Link>
    </View>
)

export default Navigation