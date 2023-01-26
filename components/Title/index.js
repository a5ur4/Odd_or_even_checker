import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import styles from './style'

export default function Title(){
    return(
        <SafeAreaView>
            <View style={styles.Title}>
                <Text style={styles.TitleText}>Verificador de</Text>
                <Text style={styles.TitleText}>Números Primos</Text>
                <View style={styles.LineText_1}/>
                <View style={styles.LineText_2}/>
            </View>
        </SafeAreaView>
    )
}