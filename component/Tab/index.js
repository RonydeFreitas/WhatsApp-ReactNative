import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Conversas from "../../Screen/Home";
import Status from "../../Screen/Settings";
import Chamadas from "../../Screen/Chamadas";

const TabNav = createMaterialTopTabNavigator();
enableScreens();

function Tab() {
    return (
        <TabNav.Navigator initialRouteName="Conversas" tabBarOptions={{
            labelStyle: { fontSize: 12, fontWeight: '700', width: "auto", paddingVertical: 8 },
            tabSize: '100'
        }}>
            <TabNav.Screen name="Conversas" component={Conversas} />
            <TabNav.Screen name="Status" component={Status}/>
            <TabNav.Screen name="Chamadas" component={Chamadas}/>
        </TabNav.Navigator>
    );
}
export default Tab;