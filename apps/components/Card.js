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
      backgroundColor : colors.white,
      borderRadius: 15,
      marginBottom: 20,
      overflow:'hidden'
      
    },
    image: {
        width:"100%",
        height: 200,

    },
    title:{
        fontSize: 25,
        fontWeight : 'bold',
        margin:5,
    },
    subtitle:{
        fontSize: 20,
        color:'cyan',

    },
    detailContainer:{
        padding:10,
    }
  })