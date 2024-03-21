import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import constants from '../../helpers/data/constants';
import InputComponent from '../../components/inputs/InputComponent';
import GoogleAuth from '../../components/auth-components/GoogleAuth';

const Login = () => {
    return (
        <View style={loginStyles.container}>
            <View>
                <Text style={loginStyles.title}>Se connecter à votre compte <Text style={{ color: `${constants.colors.blue}`, fontFamily: "Montserrat_700Bold" }}>LearnShare</Text></Text>
            </View>
            <View style={loginStyles.form}>
                <InputComponent placeholder="Adresse email" type="email-address" />
                <InputComponent placeholder="Mot de passe" type="default" maskIcon={true} />
                <Text style={{ color: `${constants.colors.gray_01}`, textAlign: "right", fontFamily: "Montserrat_500Medium" }}>Mot de passe oublié?</Text>
                <TouchableOpacity style={loginStyles.button}>
                    <Text style={loginStyles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
            <GoogleAuth />
        </View>
    );
};

const { width, height } = Dimensions.get("window")

const loginStyles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        gap: 33,
        paddingHorizontal: constants.container.paddingHorizontal
    },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat_600SemiBold"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 23
    },
    button: {
        backgroundColor: constants.colors.beige,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        height: 48,
        borderRadius: constants.radius
    },
    buttonText: {
        color: "#000000",
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold",
    },
})

export default Login;