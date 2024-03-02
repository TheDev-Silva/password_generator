import { View, Text, StyleSheet, Image } from 'react-native'
import Slider, {} from '@react-native-community/slider'
export default function Home(){

  return (
    <View style={style.container}>
      <Image source={require("./src/assets/logo.png")}
      style={style.logo}
      />
      <Text style={style.title}>20 Caracteres</Text>
      <View style={style.area}>
       <Slider 
       style={{height: 50}}
       maximumValue={6}
       minimumValue={20}
       maximumTrackTintColor={"#000"}
       minimumTrackTintColor={"#00ea3d"}
       thumbTintColor={"#009933"}
       />
      </View>
    </View>
  )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4'
    },
    logo : {
      marginBottom: 60,
    },
    title: {
      fontSize: 28  
    },
    area: {
      marginTop: 14,
      marginBottom: 14,
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 6
    }
})