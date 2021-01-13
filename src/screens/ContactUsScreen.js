import React from 'react';
import styles from '../Styles';
import { Text, View, FlatList, SafeAreaView, Image, Linking, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';



const ContactUsScreen = props =>{
    const contact = [
        {title: 'Email', description: 'Info@gmail.com', icon: require('../../assets/email.png'), key: 1},
        {title: 'Phone', description: '( 123 ) 654 467 376', icon: require('../../assets/phone.png'), key: 2},
        {title: 'Message', description: 'Is there any way to be awarded much for the Project?', icon: require('../../assets/message.png'), key: 3},

    ]

    const openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${091123456789}';
        }
        else {
            number = 'tel:${091123456789}';
        }
        Linking.canOpenURL(number)
		.then((supported) => {
			if (supported) {
				return Linking.openURL(number)
					.catch(() => null);
			}
		});
    }

    return(
        <SafeAreaView style = {{margin: 10}}>
            <View style = {styles.contactComponent}>
                <TouchableOpacity>
                    <Image
                        style = {styles.icon}
                        source = {require('../../assets/email.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style = {styles.header}>Email</Text>
                    <Text style = {styles.description}>Info@gmail.com</Text>
                </View>
            </View>

            <View style = {styles.rowList}/>
            
            <View style = {styles.contactComponent}>
                <TouchableOpacity onPress = {() => openDialScreen()}>
                    <Image
                        style = {styles.icon}
                        source = {require('../../assets/phone.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style = {styles.header}>Phone</Text>
                    <Text style = {styles.description}>(123) 654 467 376</Text>
                </View>
            </View>

            <View style = {styles.rowList}/>

            <View style = {styles.contactComponent}>
                <TouchableOpacity>
                    <Image
                        style = {styles.icon}
                        source = {require('../../assets/message.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style = {styles.header}>Message</Text>
                    <Text style = {styles.description}>Is there any way to be awarded much for the Project?</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ContactUsScreen;