import { Fragment } from "react";
import { Image, StyleSheet, View } from "react-native";

const Shapes = ({ children }) => {
    return (
        <Fragment>
            <Image style={shapesStyles.shape1} source={require('./../../assets/shape-1.png')} />
            {children}
            <Image style={shapesStyles.shape2} source={require('./../../assets/shape-2.png')} />
        </Fragment>
    );
};

const shapesStyles = StyleSheet.create({
    shape1: {
        width: 110,
        height: 110,
        position: "absolute",
        right: 0,
        top: 0,
        objectFit: "cover",
        zIndex: 250
    },
    shape2: {
        height: 50,
        width: 70,
        position: "absolute",
        left: 0,
        bottom: 0,
        objectFit: "cover",
        zIndex: 250
    }
})

export default Shapes;