import React from 'react';
import { 
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import color from '../config/color';

function StatusScreen(props) {
    return( 

        <View style={style.background}>
          <View style={style.leftComp}/>
          <View style={style.rightComp}/>
          <Image
            
              resizeMode ="contain"
             style={style.backgroundImage}
              source={require('../assets/logo.png')}
            />
          
        </View> 
    
    )
};

export default StatusScreen;
    
const style = StyleSheet.create({
    background: {
      flex : 1,
      flexDirection : 'column-reverse',
      backgroundColor: color.black,
      alignItems : 'center',
      
    },
    rightComp :{
        backgroundColor: color.primary,
        width:50,
        height:50,
        top:40,
        left: 30,
        
        position: "absolute",
    },
    leftComp :{
        backgroundColor: color.secondary,
        width:50,
        height:50,
        top:40,
        right: 30,
        
        position: "absolute",
    },
    backgroundImage :{
        height : "100%",
        width : "100%",
    
    }
  })