import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

const Footer = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={24} color="#333" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <Link  href={'/shopping'} style={styles.footerButton}>
          <View>
            <Icon name="search" size={24} color="#333" marginLeft={2} />
            <Text style={styles.footerText}>Search</Text>
          </View>
        </Link>
        <Link href={'/profile'} style={styles.footerButton}>
          <View>
            <Icon name="person" size={24} color="#333" />
            <Text style={styles.footerText}>Profile</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white', // or any color that matches your app's theme
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingBottom: 25, // Add extra padding at the bottom for better touch area
  },
  footerButton: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    marginLeft: -5,

  },
});

export default Footer;