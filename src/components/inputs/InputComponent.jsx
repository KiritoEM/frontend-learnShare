import { Fragment } from "react";
import { StyleSheet, TextInput } from 'react-native';

const InputComponent = ({ placeholder, name }) => {
    return (
        <Fragment>
            <TextInput
                style={inputStyles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
        </Fragment>
    );
};

const inputStyles = StyleSheet.create({
    input: {
        borderColor: ""
    }
})

export default InputComponent;