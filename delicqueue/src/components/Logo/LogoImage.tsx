import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import logoImage from '../../../assets/logo.png';

export function LogoImage() {
  return (
    <>

        <Image 
        source={logoImage}
        style={{
            resizeMode: 'contain',
            height:180
        }}

        />
        <Text style={styles.title}>
            FilaMed
        </Text>

        <Text style={styles.subtitle}>
        Organize e agilize o atendimento: gestão inteligente para sua clínica.
        </Text>

        
      
    </>
  );
}

