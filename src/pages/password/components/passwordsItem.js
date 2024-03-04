import { useState } from 'react'
import { Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export function PasswordsItem({ data, removePassword }) {

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, motivo] = data.split('|')
    const Tab = createBottomTabNavigator()

    const togglePasswordVisibility = () => {

        setPasswordVisible(!passwordVisible)
    }

    return (
        <ScrollView style={style.scrollView}>
            <Pressable
                onLongPress={removePassword}
                onPress={togglePasswordVisibility}
                style={style.container}>
                <Text style={style.textMotivo}>{motivo}</Text>
                <Ionicons name={passwordVisible ? 'ios-arrow-up' : 'ios-arrow-down'} size={18} color={'#fff'}/>
                {passwordVisible && <Text style={style.textPassword}>{password}</Text>}
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
        flexDirection: 'row',
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    textPassword: {
        color: '#fff',
        fontSize: 16,
    },
    textMotivo: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase'
    }
})