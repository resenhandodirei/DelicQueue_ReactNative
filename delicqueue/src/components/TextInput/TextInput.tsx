import React from 'react';
import { TextInput } from 'react-native';

import { styles } from '../TextInput/TextInputStyles';

interface TextInputProps {
    pass:string
}

export function TextInput(props : TextInputProps) {
  return (

    <TextInput
    style={styles.inputer} 
    placeholder='pass'>

    </TextInput>

  );
}