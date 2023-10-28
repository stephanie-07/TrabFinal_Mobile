import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { CadClienteProps } from "../utils/types";
import { Alert, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

const Tela_CadastroCli = ({ navigation }: CadClienteProps) => {
    const [nome, setNome] = useState('Seu nome completo');
    const [cpf, setCpf] = useState('Seu CPF');
    const [estado, setEstado] = useState('Seu estado');
    const [cidade, setCidade] = useState('Sua Cidade');
    const [bairro, setBairro] = useState('Seu bairro');
    const [rua, setRua] = useState('Sua Rua');
    const [datanasc, setDatanasc] = useState('Sua data de nascimento');
    const [complemento, setComplemento] = useState('Ex: Casa, Apartamento...');
    const [isLoading, setIsLoading] = useState(false);

    function validarCPF(cpf: string) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
            return false;
        }
    
        let soma = 0;
        let resto;
    
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }
    
        resto = (soma * 10) % 11;
    
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
    
        if (resto !== parseInt(cpf.charAt(9))) {
            return false;
        }
    
        soma = 0;
    
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }
    
        resto = (soma * 10) % 11;
    
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
    
        return resto === parseInt(cpf.charAt(10));
    }

    function cadastrarCli() {
        if (
            validarCPF(cpf)
            ){

        setIsLoading(true);

        firestore()
            .collection('cliente')
            .add({
                nome,
                cpf,
                estado,
                cidade,
                bairro,
                rua,
                datanasc,
                complemento,
                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('Home');
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

        } else{
            Alert.alert("Erro", "CPF inválido em formato incorreto");
            setIsLoading(false);} 

    }

    return (
        <>
            <View style={Styles.container}>

                <ScrollView>
                    <Text style={Styles.text}>Nome:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setNome(text) }} />


                    <Text style={Styles.text}>CPF:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setCpf(text) } } 
                        keyboardType="decimal-pad"/>


                    <Text style={Styles.text}>Estado:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setEstado(text) }} />


                    <Text style={Styles.text}>Cidade:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setCidade(text) }} />


                    <Text style={Styles.text}>Bairro:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setBairro(text) }} />

                    <Text style={Styles.text}>Rua:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setRua(text) }} />


                    <Text style={Styles.text}>Data de Nascimento:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setDatanasc(text) }} />

                    <Text style={Styles.text}>Complemento:</Text>

                    <TextInput style={[Styles.textInput, Styles.cx]}
                        onChangeText={(text) => { setComplemento(text) }} />

                    <Pressable style={Styles.pressable}
                        onPress={() => cadastrarCli()}>
                        <Text style={Styles.textPress}>Confirmar</Text>
                    </Pressable>


                </ScrollView>

            </View>
        </>
    );
};

export default Tela_CadastroCli;



const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    cx: { 
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'orange',
        width: 370,
        borderRadius: 15,

    },
    textInput:{
    color: 'black',
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 25
    },
    BotaoEntrar: {
        borderColor: 'grey',
        borderWidth: 5,
        marginHorizontal: 15,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginLeft: 20,

    },
    Cbum: {
        flex: 1
    },
    fundo: {
        flex: 1
    },
    Butao: {
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    BotaoEsqueci: {
        borderColor: 'grey',
        borderWidth: 5,
        marginHorizontal: 100,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginLeft: 1,

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