import React from "react";
import {Text, View} from "react-native";
import { StatusBar  } from "expo-status-bar";

import styles from './Style';
import { LogoImage } from "../../components/Logo/LogoImage";
import { TextInput } from "../../components/TextInput/TextInput";
import { Button } from '../../components/Button/Button'
import Spacer from '../../components/Spacer/Spacer';

export default function Home() {
    return(
        <View style={styles.appContainer}> 

            <View style={styles.logoContainer}>
                <LogoImage />
            </View>
            
            <View style={styles.inputContainer}>
                <Button/>
            </View>

            <View>
                <Spacer />
            </View>

            <StatusBar style="auto" />
            
        </View>
    )
}

