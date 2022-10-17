import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#333333'

    },
    checkBox: {
        borderRadius: 15,
        marginLeft: 15,
        height: 19,
        width: 19,
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})