import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 10,
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
    },
    boxButton: {
        borderColor: 'blue',
        borderWidth: 2,
        backgroundColor: '#b3ffff',
        borderRadius: 50,
        width: '60%',
        margin: 10,
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
      },
    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    coverImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    metaInfo: {
        marginLeft: 10
    },
    boxText: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 10,
        marginBottom: 10,
    },
    rowList: {
        marginHorizontal: 10,
        borderColor: 'transparent',
        borderBottomColor: 'gray',
        paddingBottom: 20,
        borderWidth: 2,
    },
    rowListText: {
        fontSize: 20,
        color: '#101010',
        marginHorizontal: 10,
        marginTop: 20,
        fontWeight: '700',
    },
    textInput: {
        fontSize: 20,
        marginHorizontal: 10,
        borderColor: 'transparent',
        borderBottomColor: 'gray',
        paddingBottom: 5,
        borderWidth: 2,
    },

  });

export default styles;