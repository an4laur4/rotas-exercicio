import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Layout() {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho} />
            <Slot />
        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    cabecalho: {
        height: 80,
        backgroundColor: "#A2D2F2",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#4da6ff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#4da6ff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
    }
})








