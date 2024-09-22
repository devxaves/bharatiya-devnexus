import { View, Text , StyleSheet ,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

const Title = () => {
  return (
    <View  style= {styleText.viewStyle}>
    <View>
        <Image source={require('../assets/images/Bharatiya.png')}  style={styleText.imageStyle} />
    </View>
    </View>
  )
}

export default Title

const styleText = StyleSheet.create({ 

   textStyle : { 
    color: '#ff6601',
    fontSize: 40,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 4,
    marginBottom: 15,
   },
   textStyle2 : { 
    color: '#4CAF50',
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 15,
   
   },
   imageStyle : {
    height: 80 ,
    width: 150,
    marginTop: -12,
   },
   viewStyle : { 
    display: 'flex',
    flexDirection: 'row',
   },
   footerButton: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    marginLeft: 50,
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    marginLeft: -5,

  },
})