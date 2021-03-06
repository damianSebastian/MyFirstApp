
import React from 'react';
import {
   StyleSheet,
   SafeAreaView,
   Platform,
   StatusBar,
   View,
   Image,
   Text,
   ImageBackground,
   Dimensions,
  } from 'react-native';

export default function App() {

    // return(
      
    //     <View style={{
    //       backgroundColor: 'black',
    //       flex:1,
          
    //     }}>
    //       <View style={{
    //         backgroundColor: 'cyan',
    //         width:50,
    //         height:50,
    //         top:10,
    //         right: 10,
    //         paddingTop : Platform.OS ? StatusBar:0,
    //         position: "absolute",
    //       }}
    //       />
    //       <View style={{
    //         backgroundColor: 'tomato',
    //         width:50,
    //         height:50,
    //         top:10,
    //         left: 10,
    //         paddingTop : Platform.OS ? StatusBar:0,
    //         position: "absolute",
    //       }}/>
        
    //       <View style={{
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         height: '100%',
    //       }}>
    //         <Image
    //         style={{
    //           width:400,
    //           height:400,
              
    //            flex:-1
              
    //         }}
    //           source={require('./assets/logo.png')}
    //         />
    //       </View>
    //     </View> 
      
    // )

    return(
      <View style={{
        backgroundColor : 'yellow',
        flex: 1,
        top : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
        
        <ImageBackground style={{
        
        flex:1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent:'flex-end',
        
          height :400,
          //width : "100%",
      

        }}
        source={require('./assets/logo.png')}
        >
        
          <View style={{
            flexDirection: 'column',
            alignSelf: 'center',
            bottom: "50%",
          }}>
            <Image style={{
                
                  height : 100,
                  width :100,
                  alignSelf : 'center',
                }}
                source={require('./assets/logo.png')}
                />
            <Text style={{
                  fontSize :20,
                fontWeight :'bold',
                alignSelf : 'center',
                  
                }}>Pagine de pornire foarte jmechera</Text>   


          </View>
          <View style={{
            justifyContent:'flex-end',
            alignItems: 'stretch',
            
         
          }}>
            <View style={{
              backgroundColor : 'orange',          
              height : 50,
              width : 1000,
            }}/>
            <View style={{
              backgroundColor : 'green',          
              height : 75,
              //width :50,
              
            }}/>
          
          
          </View>
      
        </ImageBackground>

      </View>
  
    )
}