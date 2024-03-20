import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { Fragment } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import constants from "../../helpers/data/constants";

const GoogleAuth = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_500Medium,
        Montserrat_700Bold
    });


    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <Fragment>
            <View style={styles.or_styles}>
                <View style={styles.line} />
                <Text style={styles.text}>Ou se connecter avec</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Image source={require('./../../assets/google-icon.png')} style={{ width: 20, height: 20, objectFit: "contain" }} />
                    <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 12.5 }}>Google</Text>
                </View>
                <View style={styles.button}>
                    <Image source={require('./../../assets/facebook-icon.png')} style={{ width: 20, height: 20, objectFit: "contain" }} />
                    <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 12.5 }}>Facebook</Text>
                </View>
            </View>
            <View>
                <Text style={{ color: `${constants.colors.gray_01}`, fontFamily: "Montserrat_500Medium" }}>Vous n' avez pas encore de compte? <Text style={{ color: "#1976D2", fontFamily: "Montserrat_700Bold" }}>S' inscrire</Text></Text>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    or_styles: {
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
        backgroundColor: "rgba(139, 136, 136, 0.4)",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 17
    },
    button: {
        flex: 1,
        borderColor: "rgba(139, 136, 136, 0.4)",
        borderWidth: 1,
        backgroundColor: "#FAFAFA",
        paddingHorizontal: 11,
        height: 48,
        borderRadius: constants.radius,
        display: "flex",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    }
});


export default GoogleAuth;