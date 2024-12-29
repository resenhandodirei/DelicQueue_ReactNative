import React from "react";
import {Text, View} from "react-native";
import { StatusBar  } from "expo-status-bar";
import styles from './Style';
import { Deliclogo } from "../../components/Logo/Logo";

export default function Home() {
    return(
        <View style={styles.container}> 
            <Deliclogo />
            <Text> DelicQueue </Text>
            <StatusBar style="auto" />
            
        </View>
    )
}

