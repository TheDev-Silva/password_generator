import { NavigationContainer } from '@react-navigation/native'
import { View, navigation } from 'react-native'
import { Routes } from './src/routes'


export default function App() {


  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
