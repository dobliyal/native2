import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../pages/screen1';
import Screen2 from '../pages/screen2';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: 'Counter Screen 1' }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: 'Counter Screen 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;