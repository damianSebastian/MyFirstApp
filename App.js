
import React from 'react';
import {

  View,
  } from 'react-native';

import Card from './apps/components/Card';
import PresentaionScreen from './apps/components/PresentationProductScreen';

export default function App() {
  return(
       <PresentaionScreen
          image={require('./apps/assets/logo.png')}
          profileImage={require('./apps/assets/logo.png')}
          title="Propriul logo"
          subtitle="$100"
          name="Avram Sebastian"
          nameDetalis="Cel mai smecher creator de aplicatii"
       />
  )
}
