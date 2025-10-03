import { router } from 'expo-router';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
    function singup() {
        if (!router.canGoBack()) {
            return Alert.alert('Não é possível voltar!');
        }
        router.back();
    }
    return (
        <View style={styles.juro}>

            <Text style={styles.title}>Veja os filmes de sua lista </Text>
            <View style={styles.container}>

                <View style={styles.filmes}>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: { id: "Wish é um filme de animação da Disney lançado em 2023, criado em comemoração aos 100 anos do estúdio. A história se passa no reino mágico de Rosas, onde as pessoas podem fazer desejos ao rei — mas nem todos são realizados." }})}>
                        <Image source={require('../../assets/wish.jpeg')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: { id: "Encanto conta a história da família Madrigal, que vive escondida nas montanhas da Colômbia, em uma casa mágica. Cada membro da família tem um dom especial, como superforça, controle da natureza ou cura — menos Mirabel, a única sem poderes. Mas quando a magia da casa começa a desaparecer, Mirabel é a única que pode descobrir o que está acontecendo e tentar salvar o encanto que mantém sua família unida." }})}>
                        <Image source={require('../../assets/encanto.jpg')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Luca é um jovem monstro marinho curioso que vive no fundo do mar, mas sonha em conhecer o mundo dos humanos. Um dia, ele conhece Alberto, outro monstro marinho aventureiro, e juntos descobrem que, fora da água, se transformam em meninos humanos. Eles vão para uma vila costeira italiana chamada Portorosso, onde vivem um verão inesquecível, cheio de amizade, gelato, corridas de bicicleta e descobertas. Mas precisam esconder quem realmente são, pois os humanos temem criaturas do mar."}})}>
                        <Image source={require('../../assets/luca.jpg')} style={styles.filme}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.filmes}>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Moana é uma jovem determinada que vive em uma ilha polinésia e sente uma forte conexão com o oceano. Quando uma escuridão ameaça sua ilha, ela parte em uma jornada ousada para salvar seu povo. Guiada pelo oceano e com a ajuda do semideus Maui, Moana enfrenta criaturas mágicas e descobre sua verdadeira força como líder e navegadora."}})}>
                        <Image source={require('../../assets/moana.webp')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Cinderela é uma jovem gentil e sonhadora que vive como criada na própria casa, maltratada por sua madrasta e irmãs postiças. Mesmo assim, ela nunca perde a esperança. Com a ajuda mágica de sua Fada Madrinha, Cinderela vai ao grande baile do reino, onde conhece o Príncipe. Mas quando o feitiço acaba à meia-noite, ela deixa para trás apenas um sapatinho de cristal, que se torna a chave para mudar seu destino."}})}>
                        <Image source={require('../../assets/cinderela.webp')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Em Zootopia, uma cidade onde animais de todas as espécies vivem juntos, a coelhinha Judy Hopps se torna a primeira policial de sua espécie. Determinada a provar seu valor, ela se une ao raposo Nick Wilde, um malandro carismático, para resolver um grande mistério: o desaparecimento de vários animais. Enquanto investigam, eles descobrem uma conspiração que ameaça a paz da cidade — e aprendem que, para mudar o mundo, é preciso coragem e empatia."}})}>
                        <Image source={require('../../assets/zootopia.jpg')} style={styles.filme}></Image>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={singup}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CBE9F9",
    },
    image: {
        flexDirection: 'row', // coloca lado a lado
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    filmes: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#FFB6C1', 
        textAlign: 'center',
        fontStyle: 'italic',
        textShadowColor: '#fff0f5', 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        letterSpacing: 1,
        padding: 12
    },
    back: {
        fontSize: 20,
        color: "#d87093", // rosa princesa
        textDecorationLine: "none",
        fontStyle: "italic",
        fontWeight: "500",
        padding: 10,
        textAlign: "center",
    },
    juro: {
        flex: 1,
    },
    filme: {
        width: 104,
        height: 199,
        margin: 4,
        flexDirection: 'row'
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
});

