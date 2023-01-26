import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        top: 20,
        backgroundColor: '#1A1C20',
        height: '80%',
        width: '100%',
        marginBottom: -100,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: "center",
    },

    FormContainer: {
        backgroundColor: '#F0A500',
        height: '40%',
        width: '70%',
        top: 70,
        borderRadius: 20,
        alignItems: "center",
    },

    FormText: {
        fontSize: 18,
        top: 20,
        fontWeight: "bold"
    },

    errorMessage: {
        top: 20,
    },

    Input: {
        top: 30,
        backgroundColor: '#1A1C20',
        width: 300,
        height: 40,
        borderRadius: 30,
        color: '#F0A500',
        textAlign: "center",
        fontSize: 18
    },
    
    Button: {
        top: 120,
        height: 50,
        width: 160,
        alignItems: "center",
        backgroundColor: '#1A1C20',
        borderRadius: 30,
        justifyContent: "center"
    },
    
    ButtonText: {
        color: '#F0A500',
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default styles