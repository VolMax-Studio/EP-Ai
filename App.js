/**
 * EP-Ai - ElektroPlan AI
 * Copyright (c) 2025 VolMax Studio. All rights reserved.
 * 
 * This file is part of EP-Ai proprietary software.
 * See LICENSE.md for license terms.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import WelcomeScreen from './src/screens/onboarding/WelcomeScreen';
import HomeScreen from './src/screens/main/HomeScreen';
import ARScreen from './src/screens/main/ARScreen';
import ProjectsScreen from './src/screens/main/ProjectsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a1a1a',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#333333',
            },
            headerTintColor: '#00ff87',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: '#ffffff',
            },
            headerBackTitleVisible: false,
            cardStyle: { backgroundColor: '#1a1a1a' },
          }}
        >
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'EP-Ai Dashboard',
              headerLeft: null, // No back button
            }}
          />
          <Stack.Screen 
            name="AR" 
            component={ARScreen}
            options={{ 
              title: 'AR Planning',
              headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen 
            name="Projects" 
            component={ProjectsScreen}
            options={{ title: 'My Projects' }}
          />
        </Stack.Navigator>
        <StatusBar style="light" backgroundColor="#1a1a1a" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
