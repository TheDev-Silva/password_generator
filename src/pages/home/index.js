import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider, { } from '@react-native-community/slider'
import { useEffect, useState } from 'react'
import { ModalPassword } from '../../components/modal';


export function Home() {

  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  let init = 'Silva'
  let finish = '2024'
  let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  function generat_Password() {

    let password = "";

    for (let i = 0, n = charSet.length; i < size; i++) {
      password += charSet.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(init+password+finish)
    setModalVisible(true)
    //setSize('senha gerada:', size)
  }


  return (
    <View style={style.container}>
      <View style={style.secretKey}>
        <Image source={require("../../assets/logo2.png")}
          style={style.logo}
        />
      </View>


      <Text style={style.title}>{size} Caracteres</Text>
      <View style={style.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor={"#000"}
          minimumTrackTintColor={"#00ea3d"}
          thumbTintColor={"#009933"}
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={style.button} onPress={generat_Password}>
        <Text style={style.buttonText}>Gerar senha</Text>
      </TouchableOpacity>




      <Modal visible={modalVisible}
        animationType="fade"
        transparent={true}>

        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>



      <View style={style.autor}>
        <Text style={style.dev}>Desenvolvido por</Text>
        <Text style={style.textAutor}>@SilvaDev 2024</Text>
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
  
  autor: {
    position: 'absolute',
    bottom: 5,
    alignItems: 'center'
  },
  dev: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textAutor: {
    fontSize: 10,
  },
  logo: {
    marginBottom: 20,
    marginTop: -50,
  },
  secretKey: {  
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 12,
    marginBottom: 12,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 6
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#EDBB00',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: 'uppercase'

  }
})