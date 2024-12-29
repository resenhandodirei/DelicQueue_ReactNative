import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from '../Logo/LogoStyles';

import Deliclogo from '../../../assets/logo.png';

export function logo() {
  return (
    <View>
        <Text style={styles.title}>
            DelicQueue Generator
        </Text>

        <Image 
        source={Deliclogo}
        style={{
            resizeMode: 'contain',
            height:180
        }}
        />
    </View>
  );
}

export { Deliclogo };
