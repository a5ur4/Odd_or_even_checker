import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Title: {
        textAlign: "center",
        alignItems: "center",
        padding: 30,
    },

    TitleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#1A1C20'
    },

    LineText_1: {
        width: 200,
        borderBottomColor: '#1A1C20',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    LineText_2: {
        top: 10,
        width: 300,
        borderBottomColor: '#1A1C20',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }

})

export default styles