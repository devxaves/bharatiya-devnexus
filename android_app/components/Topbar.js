import { View, Text } from 'react-native'
import React from 'react'
import Menu from '../assets/icons/menu'
import Bell from '../assets/icons/bell'
import tw from 'twrnc';

const Topbar = () => {
  return (
    <View style={tw`flex-row justify-between items-center`}>
            <Menu/>
            <Bell/>
        </View>
  )
}

export default Topbar