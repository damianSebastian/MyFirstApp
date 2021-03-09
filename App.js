
import React from 'react';
import {

  View,
  } from 'react-native';

import Card from './apps/components/Card';

export default function App() {
  return(
    <View style={{
      backgroundColor:'gray',
      padding:20,
      paddingTop:100,
      
    }}>
      <Card
      
      image={require('./apps/assets/logo.png')}
      title={"The jacket is real"}
      subtitle={"100%"}
      />

    </View>    
  )
}
