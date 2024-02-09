// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableHighlight style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={goToSettings}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
