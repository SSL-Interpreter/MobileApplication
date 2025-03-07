import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';


export default function AboutScreen({navigation}){
    return(
        <ImageBackground source={require('../../assets/background1.jpg')} style={styles.container}>
            <Text style={{fontSize:30}}>
                SSL TRANSLATOR
            </Text>
            <View style={{height:20}}></View>
            <Text style={{fontSize:20}}>
                VERSION
            </Text>
            <View style={{height:20}}></View>

            <Image source={require('../../assets/ok-hand.png')} style={styles.img} />
            
            <View style={{height:20}}></View>

            <Text style={styles.title}>
                App Features
            </Text>
            
            <Text style={styles.bodyText}>
                {'1. Record dynamic or static gesture\n2. Upload a sign video from gallery\n3. Translate continuous sign video meaning into text'}
            </Text>

            <View style={{height:30}}></View>

            <Text style={styles.title}>
                Designed By
            </Text>
            
            <Text style={styles.bodyText}>
                {'Dinusha Samarakoon  \nUdith Kaushalya  \nHarshana Eranda '}
            </Text>
 
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       padding : 45
    },
    bodyText:{
        textAlign:'left',
        fontSize:16,
        fontStyle:'italic'
    },
    img:{
        height:100,
        width:100
    },
    title:{
        textAlign:'left',
        fontSize:16,
        fontWeight:'500',
        paddingBottom:15
    },
   })
   