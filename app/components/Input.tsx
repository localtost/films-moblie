import React, {ChangeEvent, useEffect, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
  Animated,
} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  secureTextEntry?: boolean;
  placeholder: string;
  type?: string;
  value?: string;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  errors?: string | undefined | boolean;
}

const Input: React.FC<Props> = (props) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [value, _] = useState<Animated.AnimatedValue>(new Animated.Value(0));
  const animatedIcon = (): void => {
    Animated.timing(value, {
      toValue: 4,
      duration: 300,
      useNativeDriver: false,
    }).start(
      ({finished}) =>
        finished &&
        Animated.timing(value, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start(),
    );
  };
  const checkError = (): void => {
    if (props.errors) {
      setIsError(true);
      animatedIcon();
    } else {
      setIsError(false);
    }
  };
  useEffect(checkError, [props.errors]);
  return (
    <View>
      <Animated.View style={[styles.container, {paddingLeft: value}]}>
        {props.type && (
          <AntDesign
            style={{paddingLeft: 15}}
            name={props.type}
            size={25}
            color={isError ? Theme.crimson : Theme.lightSlateBlue}
          />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor={Theme.lightSlateBlue}
          {...props}
        />
      </Animated.View>
      <Text style={styles.errorStyle}>{isError && props.errors}</Text>
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
  errorStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    color: Theme.crimson,
  },
});
export default Input;
