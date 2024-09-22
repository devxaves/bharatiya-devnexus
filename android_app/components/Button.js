import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Button = ({Title}) => {
  return (
    <View>
      <Text style={tw`bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl hover:bg-blue-300 transition`}>{Title}</Text>
    </View>
  )
}

export default Button