import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import logoImage from '../../../assets/logo.png';

export function LogoImage() {
  return (
    <>
        <Text style={styles.title}>
            DelicQueue Generator
        </Text>

        <Image 
        source={logoImage}
        style={{
            resizeMode: 'contain',
            height:180
        }}
        />
    </>
  );
}

