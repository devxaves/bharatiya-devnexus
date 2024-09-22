import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import BestSellCard from './BestSellCard';

const Cards = () => {
  return (
    <View style={styles.viewStyle}>
    <ScrollView horizontal style={tw`mb-2`}  showsVerticalScrollIndicator={false}>
    <BestSellCard source={require('../assets/images/8.jpg')} Name="Handcrafted Decor"/>
    <BestSellCard source={require('../assets/images/10.jpg')} Name="Temple Jewellery"/>
    <BestSellCard source={require('../assets/images/12.jpg')} Name="Hand-Embroided Bag"/>
    <BestSellCard source={require('../assets/images/14.jpg')} Name="Nawabi Sherwani"/>
    <BestSellCard source={require('../assets/images/13.jpg')} Name="Glass Bangles"/>
    
</ScrollView>
</View>
  )
}

export default Cards

const styles = StyleSheet.create({
  viewStyle: {
    marginBottom: 40,
  }
})