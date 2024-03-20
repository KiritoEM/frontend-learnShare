import { Fragment } from "react";
import { StyleSheet, Text, TextInput } from 'react-native';
import constants from "../../helpers/data/constants";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";

const InputComponent = ({ placeholder, name, type }) => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    return (
        <Fragment>
            <TextInput
                style={inputStyles.input}
                placeholder={placeholder}
                keyboardType={type === "default" ? "default" : type}
                placeholderTextColor={constants.colors.gray_02}
                secureTextEntry={type === "default" ? true : false}
                autoCapitalize={'none'}
            />
        </Fragment>
    );
};

const inputStyles = StyleSheet.create({
    input: {
        backgroundColor: constants.colors.gray_03,
        padding: 11,
        height: 48,
        fontSize: constants.sizes.small,
        borderRadius: constants.radius,
        fontFamily: "Montserrat_500Medium"
    },
})

export default InputComponent;