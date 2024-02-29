import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

function CadastoPagamentoScreem(): JSX.Element{

    const [status, setStatus] = useState("");
    const [taxa, setTaxa] = useState("");
    const [nome, SetNome] =useState("");
    

    function cadastro(){
        const dados = {
            taxa: taxa,
            status: status,
            nome: nome,
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
                <Text style={styles.title}>Cadastro Formas de Pagamento</Text>
                <TextInput
                style={styles.input} 
                placeholder="Nome" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteNome) => SetNome(texteNome)}
                />
                
                <TextInput
                style={styles.input} 
                placeholder="E-mail" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textStatus) => setStatus(textStatus)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Senha" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textTaxa) => setTaxa(textTaxa)}
                secureTextEntry
                />
                <TouchableOpacity style={styles.button} 
                onPress={()=>{cadastro()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
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

export default CadastoPagamentoScreem;