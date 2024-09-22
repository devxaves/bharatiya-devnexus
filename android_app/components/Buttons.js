import { View, Text, ScrollView , StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Button from './Button';

const Buttons = () => {
  return (
    <View style={{marginTop: -4}}>
<ScrollView horizontal style={tw`mb-3`} showsVerticalScrollIndicator={false} >
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
        
      }}>
        <Text style={{ color: 'white', fontSize: 16 , fontFamily: 'Poppins_400Regular' }}>Indian Handicrafts</Text>
      </TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16 , fontFamily: 'Poppins_400Regular'  }}>Madhubani Painting</Text>
      </TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Poppins_400Regular'  }}>Jamini Roy Paintings</Text>
      </TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16 , fontFamily: 'Poppins_400Regular' }}> Traditional Embroidries</Text>
      </TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16 , fontFamily: 'Poppins_400Regular'  }}>Pattachitra</Text>
      </TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16 , fontFamily: 'Poppins_400Regular'  }}>Ethnic Wear</Text>
      </TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Poppins_400Regular'  }}>Sweet Delights</Text>
      </TouchableOpacity>
      
<TouchableOpacity style={{
        backgroundColor: '#ff6601', // Change this to your desired color
        padding: 8,
        borderRadius: 10,
        margin: 6,
      }}>
        <Text style={{ color: 'white', fontSize: 16 , fontFamily: 'Poppins_400Regular' }}>Punjabi Jutti</Text>
      </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default Buttons

const buttonStyle = StyleSheet.create( { 
  buttonStyles : {
    backgroundColor: '#ff6601',
  }
})