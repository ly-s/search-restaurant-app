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
        paddingBottom: 10,
        paddingLeft: 5,
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
        width: 300,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    contactComponent: {
        padding: 10,
        flexDirection: 'row',
        fontSize: 24,
        fontWeight: 'bold',
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
        borderRadius: 10,
        margin: 10,
    },
    boxButton: {
        borderColor: '#66ffff',
        borderWidth: 2,
        backgroundColor: '#b3ffff',
        borderRadius: 10,
        width: '40%',
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    restList: {
        margin: 10,
        marginBottom: 3,
    },
    boxInput: {
        marginTop: 5,
        fontSize: 15,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 7,
        borderRadius: 5,
    },
    header1: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    header2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    header1Subtext: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ff0000'
    },
    header2SubText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ff0000'
    }
  });

export default styles;