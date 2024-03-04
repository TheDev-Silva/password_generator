import { useState } from 'react'
import { Text, StyleSheet, Pressable, ScrollView, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import useStorage from '../../../hooks/useStorage'

export function PasswordsItem({ data, removePassword }) {

   const [passwordVisible, setPasswordVisible] = useState(false)
   const [password, motivo] = data.split('|')
   const { remove } = useStorage()

   const togglePasswordVisibility = () => {

      setPasswordVisible(!passwordVisible)
   }
   async function removeItem() {

      await remove('@pass', removePassword)
   }

   return (
      <ScrollView style={style.scrollView} >
         <Pressable
            
            onPress={togglePasswordVisibility}
            style={{flexDirection: 'row' }}
         >
            <View style={style.container} onLongPress={removePassword} >
               <View style={style.content1}>
                  <Text style={style.textMotivo}>{motivo}</Text>
                  <Ionicons name={passwordVisible ? 'chevron-up-outline' : 'chevron-down-outline'} size={18} color={'#fff'} />
               </View>
               <View style={style.compilter}>
                  {passwordVisible && (
                     <View style={style.textInformation}>
                        <Text style={style.text}>senha gerada:</Text>

                        
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                           <Text style={style.textPassword}>{password}</Text>
                           <TouchableOpacity onPress={removePassword}><Ionicons name="ban" size={24} color={"#ff0000"} /></TouchableOpacity>
                        </View>


                     </View>
                  )}
               </View>


            </View>
              
         </Pressable>


      </ScrollView>

   )
}

const style = StyleSheet.create({
   scrollView: {
      flexGrow: 1,
   },
   container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#0e0e0e",
      padding: 14,
      width: "100%",
      marginBottom: 5,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      borderRadius: 8,
   },
   content1: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
   },
   textMotivo: {
      color: '#fff',
      fontSize: 18,
      textTransform: 'uppercase'
   },

   compilter: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',

   },
   textInformation: {
      flexDirection: 'row',
      width: '109%',
      padding: 15,
      marginTop: 15,
      backgroundColor: '#edbb00',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
      marginBottom: -15
   },
   text: {
      textTransform: 'uppercase',
      color: '#000'
   },
   textPassword: {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 18,
      paddingRight: 12
   },
   

})