import { Fragment } from "react";
import { StyleSheet, TextInput } from 'react-native';
import constants from "../../helpers/data/constants";

const InputComponent = ({ placeholder, name, type }) => {
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
        padding: 12,
        borderRadius: constants.radius,
    }
})

export default InputComponent;