import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../../helpers/data/constants';

const Login = () => {
    return (
        <View style={loginStyles.container}>
            <View>
                <Text style={loginStyles.title}>Accéder à <Text style={{ color: `${colors.blue}`, fontFamily: "Montserrat_700Bold" }}>LearnShare!</Text></Text>
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
        paddingHorizontal: 29
    },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat_600SemiBold"
    }
})

export default Login;