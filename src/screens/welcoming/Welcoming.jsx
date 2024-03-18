import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Shapes from "../../components/auth-components/Shapes";
import LottieView from 'lottie-react-native';
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import colors from "../../helpers/data/colors";

const Welcoming = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
    });

    const { blue } = colors();

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
                    <Text style={{ fontSize: 26.5, fontFamily: "Montserrat_600SemiBold" }}>Apprendre en ligne avec <Text style={{ color: `${blue}`, fontFamily: "Montserrat_700Bold" }}>LearnShare!</Text></Text>
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
        paddingLeft: 27,
        paddingRight: 27
    }
})

export default Welcoming;