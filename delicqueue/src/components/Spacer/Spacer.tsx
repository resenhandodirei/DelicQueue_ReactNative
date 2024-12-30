import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ size = 10 }: { size?: number }) => {
  return <View style={{ height: size, width: size }} />;
};

export default Spacer;
