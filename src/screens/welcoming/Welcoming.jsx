import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Shapes from "../../components/auth-components/Shapes";
import LottieView from 'lottie-react-native';
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";

const Welcoming = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={welcomingStyles.container}>
            <Shapes>
                <View>
                    <LottieView source={require('./../../assets/Animation - 1710688901899.json')} style={welcomingStyles.lottie} autoPlay />
                </View>
                <View>
                    <Text style={{ fontSize: 26, fontFamily: "Montserrat_700Bold" }}>Apprendre en ligne</Text>
                </View>
            </Shapes>
        </View>
    );
};

const { width, height } = Dimensions.get("window")
const welcomingStyles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center"
    },
    lottie: {
        height: 310,
        objectFit: "contain"
    }
})

export default Welcoming;