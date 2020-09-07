import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Tab from './component/Tab';
import TelaConversas from "./Screen/TelaConversa";

function Routes(){
    return(
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Tab" component={Tab} />
                <AppStack.Screen name="TelaConversa" component={TelaConversas}/>
            </AppStack.Navigator>
    )

}

export default Routes;