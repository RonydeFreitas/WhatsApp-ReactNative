import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from "./Routes";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer
          theme={{
          colors: {
              primary: 'white',
              background: 'rgb(242, 242, 242)',
              card: '#075E54',
              boxShadow: 'none',
              text: 'white',
          }
      }}>
          <StatusBar style={styles.statusBar} />
        <Stack.Navigator>
          <Stack.Screen name={"WhatsApp"} component={Routes} options={{
              headerStyle: {
                  elevation: 0
              }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#075E54',
        color: 'white',
    },
});