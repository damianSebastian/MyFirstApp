import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

function Screen({chilldren}) {
    return (
        <SafeAreaView style={style.container}>{chilldren}</SafeAreaView>

    );
}
const style=StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
    }
})

export default Screen;