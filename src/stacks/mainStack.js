import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator(); 

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export default () => (
    <Stack.Navigator
        initialRouteName='SignIn'
        screenOptions={{
            headerShown:false 

        }}
    >

        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>

    </Stack.Navigator>
);

