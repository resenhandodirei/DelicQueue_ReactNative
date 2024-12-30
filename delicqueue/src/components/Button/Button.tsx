import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';

import generatePass from '../../services/passwordService';
import { TextInput } from '../TextInput/TextInput';
import { styles } from '../Button/ButtonStyles';

import * as Clipboard from 'expo-clipboard';

export function Button() {
    const [pass, setPass] = useState('')

    function handleGeneratorButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
        <TextInput pass={pass} />

        <Pressable
            onPress={handleGeneratorButton}
            style={styles.button}>

            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

      <Pressable
            onPress={handleCopyButton}
            style={styles.button}>

            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>

        </>
    );
  
}
