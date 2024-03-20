import { Montserrat_500Medium, useFonts } from "@expo-google-fonts/montserrat";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import constants from "../../helpers/data/constants";

const GoogleAuth = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium
    });
    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.line} />
                <Text style={styles.text}>Ou se connecter avec</Text>
                <View style={styles.line} />
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: constants.colors.gray_01,
        fontFamily: "Montserrat_500Medium",
        marginHorizontal: 12
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: constants.colors.gray_01,
    }
});


export default GoogleAuth;