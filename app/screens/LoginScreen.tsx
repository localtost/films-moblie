import React, {useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {Theme} from '../utils/theme';
import {images} from '../utils/image';
import Input from '../components/Input';
import {Formik} from 'formik';
const LoginScreen: React.FC = () => {
  const [id, setId] = useState<number | null>(null);
  let opacity = new Animated.Value(1);
  const animate = () => {
    opacity.setValue(1);
    Animated.timing(opacity, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  useMemo(animate, [id]);
  return (
    <SafeAreaView style={styles.formContainer}>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 35,
          color: Theme.white,
        }}>
        Sign Up
      </Text>

      <View style={styles.formContainer}>
        <View style={[styles.inputsWrapperForm, {width: '100%'}]}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              color: Theme.lightSlateBlue,
            }}>
            Who are You?
          </Text>
          <View style={styles.roleSelectionWrapper}>
            {images.map((el, index) => {
              const scaleItem = id === index ? opacity : 1;
              return (
                <TouchableOpacity onPress={() => setId(index)}>
                  <Animated.View style={{transform: [{scale: scaleItem}]}}>
                    <Text
                      style={[
                        {
                          alignSelf: 'center',
                          fontSize: 17,
                          fontWeight: 'bold',
                          color: el.color,
                        },
                      ]}>
                      {el.title}
                    </Text>
                  </Animated.View>

                  <Animated.View style={{transform: [{scale: scaleItem}]}}>
                    <Image
                      source={el.url}
                      resizeMethod="scale"
                      style={{width: 120, height: 120}}
                    />
                  </Animated.View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {() => (
            <View style={styles.inputsWrapperForm}>
              <Input placeholder="User Name" type="user" />
              <Input type="mail" placeholder="Email" />
              <Input secureTextEntry placeholder="Password" type="lock" />
              <Input
                type="lock"
                secureTextEntry
                placeholder="Confirm Password"
              />
              <TouchableOpacity
                style={{
                  backgroundColor: Theme.crimson,
                  borderRadius: 40,
                  padding: 13,
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 40,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: 'white',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Text style={{alignSelf: 'center', color: Theme.lightSlateBlue}}>
          Have an account?{' '}
          <Text style={{textDecorationLine: 'underline', color: Theme.crimson}}>
            Login here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Theme.darkenSlateBlue,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  inputsWrapperForm: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
  },
  roleSelectionWrapper: {
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
