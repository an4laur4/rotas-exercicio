import { router, useLocalSearchParams } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Product() {
    const { id } = useLocalSearchParams();
    function singup() {
        if (!router.canGoBack()) {
            return Alert.alert('Não é possível voltar!');
        }
        router.back();
    }
    return (

        <View style={styles.container}>

            <Text style={styles.title2}>{id}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={singup}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32
    },
    title2: {
        fontSize: 14,
        padding: 29,
        textAlign: 'center',
        lineHeight: 22,
        color: '#333',
        backgroundColor: '#fff',   // fundo branco dentro da caixinha
        borderWidth: 1,            // espessura da borda
        borderColor: '#ccc',       // cor da borda (cinza suave)
        borderRadius: 10,          // bordas arredondadas
        margin: 71,
        shadowColor: '#000',       // sombra (opcional para destacar)
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,              // sombra no Android
    },
    button: {
        backgroundColor: "#111", // botão quase preto
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        borderColor: "#a3d5e8", // contorno azul claro
        shadowColor: "#a3d5e8", // glow azulado
        shadowOpacity: 0.8,
        margin: 45
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#a3d5e8", // texto azul neon
        textTransform: "uppercase",
        letterSpacing: 1,
    },
})