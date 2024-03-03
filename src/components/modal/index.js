import { StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({password, handleClose}) {


    async function handleCopyPassword(){

        await Clipboard.setStringAsync(password)
        alert("Senha Copia para a area transferência!")
       
    }

    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}>Senha Gerada</Text>
                <Pressable style={style.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={style.password}>
                    {password}    
                    </Text>
                </Pressable>
                <View style={style.buttonArea}>
                    <TouchableOpacity style={style.buttonVoltar} onPress={handleClose}>
                        <Text style={style.titleVoltar}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.buttonSalvar}>
                        <Text style={style.titleSalvar}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: '#EDBB00',
        width: '90%',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    password: {

        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonArea: {
        flexDirection: 'row',
        width: "90%",
        marginTop: 18,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        gap: 15
    },
    buttonVoltar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f3f3f3",
        padding: 15,
        borderRadius: 8
    },
    buttonSalvar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#EDBB00",
        padding: 15,
        borderRadius: 8    
    },
    titleVoltar: {
        color: '#000',
        fontSize: 18
    },
    titleSalvar: {
        color: '#000',
        fontSize: 18
    }
    
})