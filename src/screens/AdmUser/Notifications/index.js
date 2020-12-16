import React from 'react'; 
import {Text, View} from 'react-native';

import MenuBarAdm from "../../../components/MenuBar/menuBarAdm";

export default () => {
    return (
        <View style={{flex:1 , alignItems: 'center', justifyContent:"center",}}> 
            <Text>
                Notifications
            </Text>
        <MenuBarAdm/>
        </View>
    );
}