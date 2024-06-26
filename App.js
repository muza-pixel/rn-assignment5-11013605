import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Home from './screen/Home';
import Settings from './screen/Settings';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(previousState => !previousState);

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }

          // You can return any component here, but in this case, we're using Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Home" options={{headerShown:false}}>
          {props => <Home {...props} isDarkMode={isDarkMode} />}
        </Tab.Screen>
        <Tab.Screen name="Settings" options={{headerShown:false}}>
          {props => <Settings {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
