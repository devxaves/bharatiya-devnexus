import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const FeaturedText = () => {
  return (
    <View>
     <Text style={styles.textStyle}>Seasonal Products</Text>
    </View>
  )
}

export default FeaturedText

const styles = StyleSheet.create({ 
  textStyle : { 
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 4,
    marginBottom: 15,
    fontFamily: 'Poppins_400Regular',
   },
})