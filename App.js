import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Home from './screen/Home';
import Settings from './screen/Settings';
import { Ionicons } from '@expo/vector-icons';
import home from './assets/home.png'
import Stat from './assets/statictics.png'
import settings from './assets/settings.png'
import { Image } from 'react-native';
import MyCard from './screen/MyCard';
import Statistics from './screen/Statistics';
import card from './assets/myCards.png';

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
            iconName = focused ? home : home;
          } else if (route.name === 'MyCard') {
            iconName = focused ? card : card; 
          }else if (route.name === 'Statistics') {
            iconName = focused ? Stat : Stat;
          } else if (route.name === 'Settings') {
            iconName = focused ? settings : settings;
          }

          // You can return any component here, but in this case, we're using Ionicons
          return <Image source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Home" options={{headerShown:false}}>
          {props => <Home {...props} isDarkMode={isDarkMode} />}
        </Tab.Screen>
        <Tab.Screen name="MyCard" options={{headerShown:false}}>
          {props => <MyCard {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Tab.Screen>
        <Tab.Screen name="Statistics" options={{headerShown:false}}>
          {props => <Statistics {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Tab.Screen>
        <Tab.Screen name="Settings" options={{headerShown:false}}>
          {props => <Settings {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
