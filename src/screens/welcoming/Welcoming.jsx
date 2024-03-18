import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Shapes from "../../components/auth-components/Shapes";
import LottieView from 'lottie-react-native';
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import colors from "../../helpers/data/colors";

const Welcoming = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
    });

    const { blue, gray_01 } = colors();

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Shapes>
            <View style={welcomingStyles.container}>
                <View>
                    <LottieView source={require('./../../assets/Animation - 1710688901899.json')} style={welcomingStyles.lottie} autoPlay />
                </View>
                <View style={welcomingStyles.header}>
                    <Text style={{ fontSize: 26, fontFamily: "Montserrat_600SemiBold" }}>Apprendre en ligne avec <Text style={{ color: `${blue}`, fontFamily: "Montserrat_700Bold" }}>LearnShare!</Text></Text>
                    <Text style={welcomingStyles.subHeaderText}>Découvrez une nouvelle ère d'apprentissage avec notre plateforme éducative en ligne</Text>
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
        gap: 20
    },
    lottie: {
        height: 310,
        objectFit: "contain"
    },
    header: {
        width: width,
        display: "flex",
        gap: 20,
        paddingLeft: 29,
        paddingRight: 29
    },
    subHeaderText: {
        fontSize: 13,
        color: "#646060",
        fontFamily: "Montserrat_500Medium"
    }
})

export default Welcoming;