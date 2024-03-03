import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {

   //ADICIONAR
   const getItem = async (key) => {
      try {
         const passwords = await AsyncStorage.getItem(key)
         return JSON.parse(passwords) | []

      } catch (error) {
         console.log(error)
         return []
      }
   };

   //SALVAR
   const save = async (key, value) => {

      try {
         let passwors = await getItem(key);

         passwors.push(value)

         await AsyncStorage.setItem(key, JSON.stringify(passwors))

      } catch (error) {
         console.log("ERRO AO SALVAR", error)
         return
      }

   };

   //DELETAR
   const remove = async (key, item) => {
      try {

         let passwords = await getItem(key)
         let myPasswords = passwords.filter((password) => {
            return (password != item)
         })
         await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
         return myPasswords

      } catch (error) {
         console.log("ERROR AO DELETAR", error)
      }
   }
   return { getItem, save, remove }

}
export default useStorage;