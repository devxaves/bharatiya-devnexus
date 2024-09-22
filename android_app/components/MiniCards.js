import { View, Text, Image } from 'react-native'
import React from 'react'
import MiniCard from './MiniCard'

const MiniCards = () => {
  return (
    <View>
  <MiniCard source={require('../assets/images/2.jpg')} Name="Rajasthani Souvenir"/>
  <MiniCard source={require('../assets/images/4.jpg')} Name="Kanjivaram Silk"/>
  <MiniCard source={require('../assets/images/6.jpg')} Name="Sweet Delights"/>
</View>
  )
}

export default MiniCards