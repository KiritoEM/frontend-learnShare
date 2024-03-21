import { Fragment, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import constants from "../../helpers/data/constants";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const InputComponent = ({ placeholder, name, type, maskIcon }) => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium
    });

    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    return (
        <View style={inputStyles.container}>
            <TextInput
                style={inputStyles.input}
                placeholder={placeholder}
                keyboardType={type === "default" ? "default" : type}
                placeholderTextColor={constants.colors.gray_02}
                secureTextEntry={type === "default" && hidePassword ? true : false}
                autoCapitalize={'none'}
            />
            {maskIcon && <TouchableOpacity onPress={togglePasswordVisibility} style={inputStyles.iconContainer}>
                {/* <Ionicons name={hidePassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="gray" /> */}
                <FontAwesome name={hidePassword ? 'eye-slash' : 'eye'} size={20} color={constants.colors.gray_02} />
            </TouchableOpacity>}
        </View>
    );
};

const inputStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row"
    },
    input: {
        backgroundColor: constants.colors.gray_03,
        padding: 11,
        height: 48,
        fontSize: constants.sizes.small,
        borderRadius: constants.radius,
        fontFamily: "Montserrat_500Medium",
        flex: 1
    },
    iconContainer: {
        padding: 10,
        position: "absolute",
        right: 0,
        top: 3
    },
})

export default InputComponent;