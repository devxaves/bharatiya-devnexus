import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Star from '../assets/icons/star';
import Download from '../assets/icons/download';
import { Link } from 'expo-router';


const MiniCard = ({ Name, source }) => {

    return (
        <View style={styles.viewStyle}>
            <Image source={source} style={tw`h-30 w-30 rounded-xl ml-2`} />
            <View style={tw`w-[150px] flex-col gap-3 ml-12`}>
                <Text style={tw`text-white font-medium`}>{Name}</Text>
                <View style={tw`flex-row gap-3`}>
                    <View style={tw`flex-row items-center gap-2`}>
                        <Star />
                        <Text style={tw`text-white`}>4.5</Text>
                    </View>
                    <View style={tw`flex-row items-center gap-2`}>

                        <Text style={tw`text-white`}>1k+ Sales</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonStyle}
                >
                    <Link href='/shopping' style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>Check Now</Link>
                    {/*
                <Text style={{ color: 'white', fontSize: 18, textAlign : 'center' }}>Check Now</Text>*/}
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MiniCard

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#ff6601',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        width: 'auto',
        borderRadius: 20,
        padding: 3,
        margin: 7,
    },
    buttonStyle: {
        backgroundColor: '#4CAF50', // Change this to your desired color
        padding: 5,
        borderRadius: 10,
        
        width: 120,
    },
    textStyle: {
        fontSize: 16,
    },

})