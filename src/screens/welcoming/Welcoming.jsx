import { Dimensions, StyleSheet, Text, View } from "react-native";
import Shapes from "../../components/auth-components/Shapes";

const Welcoming = () => {
    return (
        <View style={welcomingStyles.container}>
            <Shapes>
                <Text>Hello from Welcoming</Text>
            </Shapes>
        </View>
    );
};

const { width, height } = Dimensions.get("window")
const welcomingStyles = StyleSheet.create({
    container: {
        width: width,
        height: height
    }
})

export default Welcoming;