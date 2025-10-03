import { router } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 
 
export default function Index(){
    function singup() {
        router.navigate("/(tabs)/home");
    }
    return(
        <ImageBackground source={require('../../assets/images/fundo.jpg')} style={styles.background}>
            <View  style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={singup}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        gap: 400,
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    title: {
        fontSize: 26,
        color: "#4da6ff", // azul
        fontFamily: "Courier New",
        textTransform: "lowercase",
        letterSpacing: 2,
        marginBottom: 40,
        textAlign: "center",
        textShadowColor: "rgba(163, 213, 232, 0.8)",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8,
    },
    button: {
        backgroundColor: "#111", // botão quase preto
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#a3d5e8", // contorno azul claro
        shadowColor: "#a3d5e8", // glow azulado
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#a3d5e8", // texto azul neon
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    background: {
        flex: 1,
        resizeMode: "contain", 
    },
})






