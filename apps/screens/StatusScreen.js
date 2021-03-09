import React from 'react';
import { 
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function StatusScreen(props) {
    return( 
        
        <View style={style.background}>
          <MaterialCommunityIcons name="close" size={50} color="white" style={style.leftComp}/> 
          <MaterialCommunityIcons name="trash-can-outline" size={50} color="white" style={style.rightComp}/>
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
      backgroundColor: colors.black,
      alignItems : 'center',
      
    },
    rightComp :{       
        top:40,
        right: 30,      
        position: "absolute",
    },
    leftComp :{      
        top:40,
        left: 30,      
        position: "absolute",
    },
    backgroundImage :{
        height : "100%",
        width : "100%",
    
    }
  })