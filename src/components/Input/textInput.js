import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const CustomInput = ({placeholder, keyboardType, validator, onTextChange}) => {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // Function to handle text input change
  const handleChange = text => {
    setInput(text);
    setIsValid(true); // Reset validation state on input change
    if (onTextChange) {
      onTextChange(text); // Call the onTextChange callback with the new text value
    }
  };

  // Function to handle input focus
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Function to handle input blur
  const handleBlur = () => {
    setIsFocused(false);
    validateInput();
  };

  // Function to validate input based on provided validator function
  const validateInput = () => {
    if (validator) {
      setIsValid(validator(input));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {borderColor: isValid ? 'gray' : 'red', color: 'black'},
        ]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        secureTextEntry={keyboardType === 'password'}
      />
      {!isValid && <Text style={styles.error}>Invalid {placeholder}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 75,
  },
  input: {
    height: 64,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    width: 320,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginTop: -8,
  },
});

export default CustomInput;
