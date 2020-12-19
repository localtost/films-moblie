import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface Props {
  secureTextEntry?: boolean;
  placeholder: string;
  type?: string;
}
const Input: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      {props.type && (
        <AntDesign
          style={{paddingLeft: 15}}
          name={props.type}
          size={25}
          color={Theme.lightSlateBlue}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={Theme.lightSlateBlue}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    marginTop: 25,
    flexDirection: 'row',
    borderColor: Theme.lightSlateBlue,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 40,
  },
  input: {
    color: Theme.white,
    width: '90%',
    paddingLeft: 20,
  },
});
export default Input;
