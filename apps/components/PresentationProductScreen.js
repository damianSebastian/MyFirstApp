import React from 'react';
import { Image, View, StyleSheet,Text } from 'react-native';

import colors from '../config/colors';


function PresentationProductScreen({image, profileImage, title,subtitle,name,nameDetalis }) {
    return (
        <View style={style.container}>
            <Image style={style.image} resizeMode='cover' source={image}/>
            <Text style={style.titleText}>{title}</Text>
            <Text style={style.subtitleText}>{subtitle}</Text>
            <View style={style.profile}>
                <Image source={profileImage} style={{width: 80, height:"100%"}} resizeMode="contain"/>
                <View>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.nameDetalis}>{nameDetalis}</Text>
                </View>
            </View>
            

        </View>

    );
}

export default PresentationProductScreen;

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,       
    
    },
    image :{
        height:300,
        width:"100%",

    },
    titleText:{
        fontSize: 30,
        
        color:colors.black,
        padding: 10,
        paddingLeft: 20,
    },
    subtitleText:{
        fontSize: 20,      
        color:'blue',
        padding: 5, 
        paddingLeft: 20,
    },
    profile:{
        height: 70,
        width:"100%",
        margin:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',   
        top: 20,
    },
    name:{
        fontSize: 18,
        fontWeight:'bold',

    },
    nameDetalis:{
        fontSize:15,
    }

})