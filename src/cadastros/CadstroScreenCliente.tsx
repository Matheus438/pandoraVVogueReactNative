import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

function CadastroClientesScreem(): JSX.Element{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, SetNome] =useState("");
    const [cpf, setCpf] = useState ("");
    const [celular, setCelular] = useState ("");
    const [nascimento, setNascimento] = useState ("");
    const [cidade, setCidade] = useState ("");
    const [estado, setEstado] = useState ("");
    const [pais, setPais] = useState ("");
    const [rua, setRua] = useState ("");
    const [numero, setnumero] = useState ("");
    const [bairro, setBairro] = useState ("");
    const [cep, setCep] = useState ("");
    const [complemento, setComplemento] = useState ("");

    function cadastro(){
        const dados = {
            email: email,
            password: password,
            nome: nome,
            cpf: cpf,
            celular: celular,
            nascimento: nascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
        }
        console.log(dados);
    }

    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
             resizeMode="contain" 
            source={require('../assets/images/pandora.jpg')}/>

            <View style={styles.card}>
                
                <Text style={styles.title}>Cadastro Cliente</Text>
                <TextInput
                style={styles.input} 
                placeholder="Nome" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteNome) => SetNome(texteNome)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Celular" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteCelular) => setCelular(texteCelular)}
                />

                <TextInput
                style={styles.input} 
                placeholder="Nascimento" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteNascimento) => setNascimento(texteNascimento)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Cidade" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteCidade) => setCidade(texteCidade)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Estado" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteEstado) => setEstado(texteEstado)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Pais" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textePais) => setPais(textePais)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Rua" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteRua) => setRua(texteRua)}
                />

                <TextInput
                style={styles.input} 
                placeholder="Numero" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteNumero) => setnumero(texteNumero)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Bairro" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textBairro) => setBairro(textBairro)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="CEP" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textCep) => setCep(textCep)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Complemento" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textComplemento) => setComplemento(textComplemento)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="E-mail" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textEmail) => setEmail(textEmail)}
                secureTextEntry
                />

                <TextInput
                
                style={styles.input} 
                placeholder="Senha" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textePassword) => setPassword(textePassword)}
                secureTextEntry
                />
                <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor={"#151413"}
                onChangeText={(textcpf) => setCpf(textcpf)}
                />
                <TouchableOpacity style={styles.button} 
                onPress={()=>{cadastro()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Recuperar senha</Text>
                </TouchableOpacity>

            
                
            </View>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ACA3A9'
    },
    logo: {
        width: 450,
        height: 350,
        marginBottom: 20,
        marginTop: -150
    },
    card: {
        backgroundColor: '#96747E',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'regba(0,0,0,0.3',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center',

    },
    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3D3D3D'
    },
    button: {
        backgroundColor: '#7C2F3D',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
        height: 40,

    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
       

    },
    forgotPassword: {
        color: '#3D3D3D',
        textAlign: 'center',
        marginTop: 10,

    },

});

export default CadastroClientesScreem;