import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import constants from '../../helpers/data/constants';

const Login = () => {
    return (
        <View style={loginStyles.container}>
            <View>
                <Text style={loginStyles.title}>Accéder à votre compte <Text style={{ color: `${constants.colors.blue}`, fontFamily: "Montserrat_700Bold" }}>LearnShare</Text></Text>
            </View>
            <View>

            </View>
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
        gap: 30,
        paddingHorizontal: constants.container.paddingHorizontal
    },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat_600SemiBold"
    }
})

export default Login;