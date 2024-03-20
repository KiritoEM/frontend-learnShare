import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Shapes from "../../components/auth-components/Shapes";
import LottieView from 'lottie-react-native';
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import constants from "../../helpers/data/constants";

const Welcoming = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
    });


    return (
        <Shapes>
            <View style={welcomingStyles.container}>
                <View>
                    <LottieView source={require('./../../assets/Animation - 1710688901899.json')} style={welcomingStyles.lottie} autoPlay />
                </View>
                <View style={welcomingStyles.header}>
                    <Text style={{ fontSize: parseInt(`${constants.sizes.xl}`), fontFamily: "Montserrat_600SemiBold" }}>Apprendre en ligne avec <Text style={{ color: `${constants.colors.blue}`, fontFamily: "Montserrat_700Bold" }}>LearnShare!</Text></Text>
                    <Text style={welcomingStyles.subHeaderText}>Découvrez une nouvelle ère d'apprentissage avec notre plateforme éducative en ligne</Text>
                    <TouchableOpacity style={welcomingStyles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={welcomingStyles.buttonText}>Commencer à apprendre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Shapes>
    );
};

const { width, height } = Dimensions.get("window")
const welcomingStyles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        gap: 30
    },
    lottie: {
        height: 305,
        objectFit: "contain"
    },
    header: {
        width: width,
        display: "flex",
        gap: 28,
        paddingHorizontal: constants.container.paddingHorizontal
    },
    subHeaderText: {
        fontSize: 13,
        color: "#646060",
        fontFamily: "Montserrat_500Medium"
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
        fontSize: 13,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold",
    },

})

export default Welcoming;