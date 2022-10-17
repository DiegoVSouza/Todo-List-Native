import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        backgroundColor: '#0D0D0D',
        height: 175,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        padding: 24
    },
    created: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    concluded: {
        color: '#8284FA',
        fontWeight: 'bold',
    },
    info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,

    },
    infoContent: {
        flexDirection: 'row'
    },
    todoContent: {
        borderTopWidth: 1,
        borderTopColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        height: 208,

    },
    image: {
        marginTop: 48
    },
    infoNumber: {
        borderRadius: 12,
        padding: 2,
        width: 30,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333'
    },
    number: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: 'bold'
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },
    input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 6,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        height: 54,
        flexDirection: 'row',
        transform: [{ translateY: -50 }]
    },
    listEmpthyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 16,
        fontWeight: 'bold'
    },
    listEmpthySubText: {
        color: '#808080',

    }
})