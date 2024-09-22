import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Star from '../assets/icons/star';
import Download from '../assets/icons/download';
import Heart from '../assets/icons/heart';
import { Link } from 'expo-router';

const Card = ({Name , source}) => {
  return (
    <View style={tw`h-[250px] w-[300px] mr-5`}>
        <Image source={source} style={tw`h-[100%] w-[100%] rounded-xl`}/>
        <View style={tw`bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute`}></View>
        <View style={tw`absolute top-5 right-5`}><Heart/></View>
        <View style={tw`absolute bottom-5 left-5`}>
<View style={tw`flex-row` }>
<Star/><Star/><Star/><Star/>
</View>
<Link href={'/shopping'} style={tw`text-white text-xl`}>{Name}</Link>
<View style={tw`flex-row`}>

<Text style={tw`text-white`}>1k+  Buyers</Text>
        </View>
        </View>
    </View>
  )
}

export default Card