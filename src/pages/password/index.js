import { View, Text, StyleSheet, FlatList, Modal, Touchable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PreventRemoveContext, useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import useStorage from '../../hooks/useStorage'
import { PasswordsItem } from './components/passwordsItem'

export function Passwords() {

   const [lisPassowrs, setListPasswords] = useState([])
   const [selectPassword, setSeletPassword] = useState(null)
   const [isModalVisible, setIsModalVisible] =useState()
   const focused = useIsFocused()
   const { getItem, remove } = useStorage()

   useEffect(() => {
      async function loadPassword() {
         const passwords = await getItem("@pass")
         setListPasswords(passwords)
      }
      loadPassword()

   }, [focused])

   async function removeItemPassword(item) {

      //const password = await remove("@pass", item)
      //setListPasswords(password)
      setSeletPassword(item)
      setIsModalVisible(true)

   }
   async function handlerConfirmRemove(){
      await remove("@pass", selectPassword);
      setListPasswords(PrevPassword => PrevPassword.filter(password => password != selectPassword))
      setIsModalVisible(false)
      setSeletPassword(null)
   }
   function handleCancelRemove(){
      setIsModalVisible(false);
      setSeletPassword(null)
   }


   return (
      <SafeAreaView style={{ flex: 1, }}>
         <View style={style.header}>
            <Text style={style.title}>
               Minhas Senhas
            </Text>
         </View>
         <View style={style.content}>
            <FlatList
               style={{ flex: 1, paddingTop: 14 }}
               data={lisPassowrs}
               keyExtractor={(item) => String(item)}
               renderItem={({ item }) =>
                  <PasswordsItem
                     data={item}
                     removePassword={() => removeItemPassword(item)}
                  />}
            />
         </View>
         <Modal
         animationType='slide'
         transparent={true}
         visible={isModalVisible}
         onRequestClose={()=> setIsModalVisible(false)}
         
         >
            <View style={style.modalView}>
               <Text style={style.textMessage} >Deseja realmente apagar a senha ?</Text>
               <View style={style.modalText}>
                  <TouchableOpacity style={style.textAbortar} onPress={handleCancelRemove}>
                       <Text style={style.textResponse}>Abortar</Text> 
                  </TouchableOpacity>
                  <TouchableOpacity style={style.textRemover} onPress={handlerConfirmRemove}>
                       <Text style={style.textResponse}>Confirmar</Text> 
                  </TouchableOpacity>  
               </View>
            </View>
         </Modal>
      </SafeAreaView>

   )
}

const style = StyleSheet.create({
   header: {
      marginTop: -22,
      backgroundColor: '#EDBB00',
      paddingTop: 40,
      paddingBottom: 20,
      paddingLeft: 35,
      paddingRight: 14,

   },
   title: {
      fontSize: 20,
      color: '#000',
      textTransform: 'uppercase',
      fontWeight: "bold",
      letterSpacing: 1
   },
   content: {
      flex: 1,
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
   },
   modalView: {
      position: 'absolute',
      bottom: 0,
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5 
      
   },
   textMessage: {
      fontSize: 16,
      textTransform: 'uppercase',
      marginBottom: 10
   },
   modalText: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   textAbortar: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#edbb00',
      marginRight: 15,
      padding: 15,
      borderRadius: 5,
   },
   textRemover: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#edbb00',
      marginLeft: 15,
      padding: 15,
      borderRadius: 5,  
   },
   textResponse: {
      fontSize: 16,
      textTransform: 'uppercase'
   }
})