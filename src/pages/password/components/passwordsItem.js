import { Text, StyleSheet, Pressable, ScrollView } from 'react-native'

export function PasswordsItem({ data, removePassword }) {

    {/*  */ }
    return (
        <ScrollView style={style.scrollView}>
            <Pressable
                onLongPress={removePassword}
                style={style.container}>
                <Text style={style.textPassword}>{data}</Text>
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
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textPassword: {
        color: '#fff',
        fontSize: 18,
    }
})