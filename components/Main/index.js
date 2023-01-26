import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, Vibration } from "react-native";

import styles from "./style";

export default function Main(){

    const [number, setNumber] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    function verification(){
        if (number % 2 == 0){
            Alert.alert ('Resultado:', number + ' é par')
        } else {
            Alert.alert ('Resultado:', number + ' é impar')
        }
    }

    function validation(){
        if (number == '' ){
            setErrorMessage('Este campo é obrigatório*')
            Vibration.vibrate()
        } else {
            verification()
            setErrorMessage(null)
            setNumber('')
        }
    }

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.FormContainer}>
                <Text style={styles.FormText}>Insira o número abaixo:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.Input}
                value={number}
                onChangeText={setNumber}
                keyboardType='numeric'
                placeholder='Exemplo: 10'
                placeholderTextColor={'#CF7500'}
                />
                <TouchableOpacity
                onPress={() => {
                    validation()
                }
                }
                style={styles.Button}
                >
                    <Text style={styles.ButtonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}