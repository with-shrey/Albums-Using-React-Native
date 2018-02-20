import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
  <Text style={styles.textStyle}>{children}</Text>
  </TouchableOpacity>
);


const styles = {
  buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      paddingTop: 5,
      paddingBottom: 5,
      borderColor: '#ff00ff',
      borderWidth: 2,
      borderRadius: 5

  },
  textStyle: {
    alignSelf: 'center',
    color: '#ff00ff',
    fontWeight: '600',
    fontSize: 25

  }
};

export default Button;
