import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = ({ isDarkMode, toggleTheme }) => {
  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={themeStyles.container}>
      <View>
        <Text style={themeStyles.header}>Settings</Text>

        <View style={themeStyles.settingsContainer}>
          <TouchableOpacity>
            <Text style={themeStyles.settingOption}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={themeStyles.settingOption}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={themeStyles.settingOption}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={themeStyles.settingOption}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={themeStyles.settingOption}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={themeStyles.themeToggleContainer}>
          <Text style={themeStyles.themeToggleText}>Theme</Text>
          <Switch
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Settings;

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 40,
    color: '#000',
  },
  settingsContainer: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
    gap: 30,
  },
  settingOption: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'gray',
    color: '#000',
  },
  themeToggleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  themeToggleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 40,
    color: '#fff',
  },
  settingsContainer: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
    gap: 30,
  },
  settingOption: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'gray',
    color: '#fff',
  },
  themeToggleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  themeToggleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
