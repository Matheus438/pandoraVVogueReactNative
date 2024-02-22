import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

function LoginScream(): JSX.Element{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email: email,
            password: password,
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
                <Text style={styles.title}>Login Profissional</Text>
                <TextInput
                style={styles.input} 
                placeholder="E-mail" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textEmail) => setEmail(textEmail)}
                />
                
                <TextInput
                style={styles.input} 
                placeholder="Senha" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textePassword) => setPassword(textePassword)}
                secureTextEntry
                />
                <TouchableOpacity style={styles.button} 
                onPress={()=>{login()}}>
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

export default LoginScream;