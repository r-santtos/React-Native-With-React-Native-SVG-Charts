import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Extract from './pages/Extract';
import Details from './pages/Details';

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#20232a" />
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <AppStack.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{ 
            headerShown: false
          }}
        />

        <AppStack.Screen 
          name="Reports" 
          component={Reports}
          options={{
            title: 'Histórico / 2020',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />

        <AppStack.Screen 
          name="Extract"
          component={Extract}
          options={{
            title: 'Extrato / 2020',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />

        <AppStack.Screen 
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes',
            headerTitleAlign: 'Details',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;