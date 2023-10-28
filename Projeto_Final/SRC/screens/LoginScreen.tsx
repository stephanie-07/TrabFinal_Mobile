import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import auth from "@react-native-firebase/auth";
import Carregamento from '../layout/Carregamento';
import { HomeProps, LoginProps } from "../utils/types";
import { useState } from "react";

const LoginScreen = ({ navigation, route }: LoginProps) => {

    const [email, setEmail] = useState('Seu E-mail...');
    const [senha, setSenha] = useState('Sua Senha...');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        setIsLoading(true);

        if (email && senha) {
            // setIsLoading(true);
            console.log('redefinir senha');
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('Home') })
                .catch((error) => Alert.alert(error))
                .finally(() => setIsLoading(false));

        }
    }

    function redefinirSenha() {
        if (email && senha) {
            console.log('redefinir senha');
            auth()
                .sendPasswordResetEmail(email)
                .then(() => Alert.alert("Redefinir senha", "Enviamos um email para você"))
                .catch((error) => Alert.alert(error));
        } else {
            Alert.alert('error')
        }
    }


    return (
        <View style={Styles.container}>
            <View style={Styles.headerr}>
                <Image style={Styles.img} source={require('../assets/Icon_User.png')} />
            </View>

            <Text style={Styles.text}>E-mail:</Text>

            <TextInput style={[Styles.textInput, Styles.cx]}
                value={email}
                onChangeText={(text) => {
                    console.log('Coloque o seu email:', text);
                    setEmail(text);
                }} />

            <Text style={Styles.text}>Senha:</Text>

            <TextInput style={[Styles.textInput, Styles.cx]}
                value={senha}
                onChangeText={(text) => {

                    console.log('Coloque a sua senha:', text);
                    setSenha(text);
                }} />
            <View>
                <Pressable style={Styles.pressable}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.textPress}>Entrar</Text>
                </Pressable>

                <Pressable style={Styles.pressable}
                    onPress={() => logar()}>
                    <Text style={Styles.textPress}>Cadastrar</Text>
                </Pressable>

                <Pressable style={Styles.pressable}
                    onPress={() => navigation.navigate('TrocaSenha')}>
                    <Text style={Styles.textPress}>Esqueci a Senha</Text>
                </Pressable>
            </View>

        </View>

    );


}
export default LoginScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    headerr: {
        backgroundColor: 'orange',
        width: '100%',
        marginBottom: 80,
        alignItems: "center"

    },
    img: {
        width: 150,
        height: 150,
        marginTop: 30,
        top: 60,

    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 32
    },
    textInput: {
        color: 'black',
    },
    cx: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'orange',
        width: 370,
        borderRadius: 15,

    },
    pressable: {
        backgroundColor: 'orange',
        width: 370,
        height: 50,
        borderRadius: 15,
        marginTop: 25,
        display: "flex",
        alignItems: "center"

    },
    textPress: {
        color: 'black',
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 15

    }

});
