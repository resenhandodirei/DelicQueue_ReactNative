import React from "react";
import {Text, View} from "react-native";
import { StatusBar  } from "expo-status-bar";

import styles from './Style';
import { LogoImage } from "../../components/Logo/LogoImage";

export default function Home() {
    return(
        <View style={styles.appContainer}> 
            <View style={styles.logoContainer}>
                <LogoImage />
            </View>
            


            <StatusBar style="light" />
            
        </View>
    )
}

