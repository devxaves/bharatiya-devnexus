import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Card from './Card';

const Cards = () => {
  return (
    <View>
    <ScrollView horizontal style={tw`mb-2`}  showsVerticalScrollIndicator={false}>
    <Card source={require('../assets/images/1.jpg')} Name="Jaipur Handicraft"/>
    <Card source={require('../assets/images/3.jpg')} Name="Stonework Lehenga"/>
    <Card source={require('../assets/images/5.jpg')} Name="Navratri Kurti"/>
    <Card source={require('../assets/images/7.jpg')} Name="Nolen Gurer Rasgulla"/>
    <Card source={require('../assets/images/9.jpg')} Name="Puja Samagri"/>
    <Card source={require('../assets/images/11.jpg')} Name="Teracotta Sculpture"/>
</ScrollView>
</View>
  )
}

export default Cards

const styles = StyleSheet.create({})