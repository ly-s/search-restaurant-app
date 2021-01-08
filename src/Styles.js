import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'center',
    },
    curvedBox: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
    titleHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 30,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        color: 'gray',
        borderBottomColor: 'gray',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    contactComponent: {
        marginTop: 10,
        width: '95%',
        padding: 20,
        flexDirection: 'row',
        fontSize: 24,
        fontWeight: 'bold',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth: 2,
        fontSize: 24,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    textField: {
        width: '60%',
        padding: 10,
        borderWidth: 2,
        borderColor: 'gray',
        margin: 10,
    }
    
  });

export default styles;