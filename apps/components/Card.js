import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

import colors from '../config/colors';

function Card({title, subtitle, image}) {
    return (
        <View style={style.card}>
            <Image source={image} style={style.image}/>
            <View style={style.detailContainer}>
                <Text style={style.title}>{title}</Text>
                 <Text style={style.subtitle}>{subtitle}</Text>
            </View>
            

        </View>
    );
}

export default Card;

const style=StyleSheet.create({
    card :{
      backgroundColor : colors.background,
      borderRadius: 15,
      marginBottom: 20,
      padding:20,
      overflow:'hidden'
      
    },
    image: {
        width:"100%",
        height: 200,

    },
    title:{
        fontSize: 25,
        fontWeight : 'bold',
        marginTop:5,
        color:colors.text,
    },
    subtitle:{
        fontSize: 20,
        marginTop:5,
        color:colors.gray,
        

    },
    detailContainer:{
      padding:10,
    }
  })