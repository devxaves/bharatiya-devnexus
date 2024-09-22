import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


const Index = () => {

  return (
    <View style={styles.container}>
      <Link href={'/home'} style={styles.linkStyle}>
        <View style={styles.viewStyle}>
        <Image source={require('../assets/images/icon1.png')} style={styles.imageStyle} />
        <Text style={styles.textStyles}>Bharat<Text style={styles.textStyle2s} t>iya</Text></Text>
        </View>
      </Link>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
},
  container: {
    backgroundColor: 'white',
    height: 1000,
  },
  linkStyle: {
    height: 1000,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 225,
  },
  textStyles: {
    color: '#ff6601',
    fontSize: 40,
    fontWeight: '600',
    marginTop: -30,
    fontFamily:'Poppins_400Regular',
  },
  textStyle2s: {
    color: '#4CAF50',
    fontSize: 40,
    fontWeight: '600',
    fontFamily:'Poppins_400Regular',
  },
  viewStyle : { 
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
  }
})
