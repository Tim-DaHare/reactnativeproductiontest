import { StyleSheet } from 'react-native'

const settings = {
    borderColor: '#CCCCCC'
}

export const style = StyleSheet.create({
    app__container: {
        display: 'flex',
        flex: 1
    },
    navigation__container: {
        height: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: settings.borderColor,
    },
    navigation__button: {
        width: 80,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})