import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const TopActions = () => {
  return (
 <View style={tw`flex-row justify-between items-center mb-2`}>
<Text style={styles.textStyle}>Top Deals For You</Text>
<Text style={tw`  font-bold text-green-500`}>See all</Text>
        </View>
  )
}

export default TopActions

const styles = StyleSheet.create({ 
  textStyle : { 
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 15,
    fontFamily: 'Poppins_400Regular',
   },
   text2:{
    fontSize: 15,
   }
})