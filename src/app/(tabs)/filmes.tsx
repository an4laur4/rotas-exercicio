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

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: { id: "Durante a Segunda Guerra Mundial, o jovem e franzino Steve Rogers quer se alistar no exército para lutar contra os nazistas, mas é rejeitado devido à sua saúde frágil. Ele então se voluntaria para um experimento secreto que o transforma no super soldado conhecido como Capitão América. Com força, agilidade e coragem sobre-humanas, Steve enfrenta o vilão Caveira Vermelha e sua organização HYDRA, para salvar o mundo de uma ameaça poderosa." }})}>
                        <Image source={require('../../assets/capitao.jpeg')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: { id: "Em As Marvels, três heroínas poderosas — Carol Danvers (Capitã Marvel), Kamala Khan (Ms. Marvel) e Monica Rambeau — têm seus poderes misteriosamente ligados. Para salvar o universo de uma nova ameaça cósmica, elas precisam unir forças e aprender a trabalhar juntas. Com muita ação, humor e superpoderes, o filme celebra a força feminina e a importância da colaboração entre gerações." }})}>
                        <Image source={require('../../assets/marvel.png')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Carol Danvers é uma ex-piloto da Força Aérea que ganha superpoderes extraordinários após um acidente com tecnologia alienígena. Agora, como Capitã Marvel, ela se vê no meio de uma guerra intergaláctica entre duas raças alienígenas. Enquanto descobre seu passado e verdadeira identidade, Carol precisa lutar para proteger a Terra e usar seus poderes para se tornar uma das heroínas mais poderosas do universo."}})}>
                        <Image source={require('../../assets/marvel2.jpg')} style={styles.filme}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.filmes}>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Peter Parker é um adolescente tímido que ganha superpoderes depois de ser picado por uma aranha geneticamente modificada. Ao descobrir seus poderes, ele aprende que “com grandes poderes vêm grandes responsabilidades”. Depois da trágica morte de seu tio Ben, Peter decide usar seus poderes para proteger a cidade de Nova York como o Homem-Aranha, enfrentando o vilão Duende Verde e outros inimigos."}})}>
                        <Image source={require('../../assets/homem.jpg')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Barry Allen, também conhecido como Flash, é um jovem herói com a habilidade de se mover em velocidades incríveis. Ao tentar usar seus poderes para mudar o passado e salvar sua família, Barry acaba criando uma linha do tempo alternativa, causando consequências inesperadas para o universo. Com a ajuda de aliados, ele precisa corrigir essa nova realidade e impedir uma ameaça maior que coloca em risco o multiverso."}})}>
                        <Image source={require('../../assets/flash.jpg')} style={styles.filme}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate({ pathname: '/(tabs)/[id]', params: {id: "Após ajudar os Vingadores em Guerra Civil, o jovem Peter Parker tenta voltar à sua rotina como estudante do ensino médio, enquanto aprende a lidar com seus novos poderes e responsabilidades como o Homem-Aranha. Com a ajuda de Tony Stark (Homem de Ferro) como mentor, Peter enfrenta o vilão Abutre, que está traficando armas alienígenas. Em meio a tudo isso, ele precisa provar que pode ser um verdadeiro herói — mesmo sem depender da armadura."}})}>
                        <Image source={require('../../assets/homem2.jpg')} style={styles.filme}></Image>
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

