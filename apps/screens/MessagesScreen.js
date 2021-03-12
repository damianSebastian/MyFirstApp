import React from 'react';
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';

import Constants from "expo-constants";

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages = [
    {
        id:1,
        title:'T1',
        description:'D1',
        image: require('../assets/logo.png'),
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image: require('../assets/logo.png'),
    },
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) =>
                <ListItem
                    name={item.title}
                    nameDetalis={item.description}
                    profileImage={item.image}/>} />

        </Screen>
    );
} 

export default MessagesScreen;