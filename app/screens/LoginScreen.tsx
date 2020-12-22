import React, {useMemo, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Alert,
} from 'react-native';
import {Theme} from '../utils/theme';
import {images, RegistrationValues} from '../utils/data';
import Input from '../components/Input';
import {Formik} from 'formik';
import {loginInitialValues} from '../schema/initialValues';
import {loginSchema} from '../schema';
import {useDispatch} from 'react-redux';
import {Login} from '../state/login/actionCreaters';
import RoleItem from '../components/RoleItem';

const LoginScreen: React.FC = () => {
  const [id, setId] = useState<number | null>(null);
  const dispatch = useDispatch();
  let opacity = new Animated.Value(1);
  const animate = () => {
    opacity.setValue(1);
    Animated.timing(opacity, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const handleSubmit = (values: any): void => {
    if (id == null) {
      return Alert.alert('PLease choose your Role');
    }
    dispatch(Login({...values, role: id}));
  };
  useMemo(animate, [id]);
  return (
    <SafeAreaView style={styles.formContainer}>
      <Text style={styles.signUpTitle}>Sign Up</Text>
      <View style={styles.formContainer}>
        <View style={[styles.inputsWrapperForm, {width: '100%'}]}>
          <Text style={styles.whoAreYouTitle}>Who are You?</Text>
          <View style={styles.roleSelectionWrapper}>
            {images.map((el, index) => {
              const scaleItem = id === index ? opacity : 1;
              return (
                <TouchableOpacity key={index} onPress={() => setId(index)}>
                  <RoleItem scale={scaleItem} role={el} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <Formik
          initialValues={loginInitialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}>
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            handleSubmit,
          }) => (
            <View style={styles.inputsWrapperForm}>
              {RegistrationValues.map((el, index) => {
                const {
                  placeholder,
                  iconName,
                  fieldName,
                  secureTextEntry = undefined,
                } = el;
                return (
                  <Input
                    key={index}
                    placeholder={placeholder}
                    type={iconName}
                    secureTextEntry={secureTextEntry}
                    onBlur={handleBlur(fieldName)}
                    // @ts-ignore
                    value={values[fieldName]}
                    onChangeText={handleChange(fieldName)}
                    // @ts-ignore
                    errors={touched[fieldName] && errors && errors[fieldName]}
                  />
                );
              })}
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonContainer}>
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
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
  signUpTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: Theme.white,
  },
  whoAreYouTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: Theme.lightSlateBlue,
  },
  buttonContainer: {
    backgroundColor: Theme.crimson,
    borderRadius: 40,
    padding: 13,
    width: '70%',
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
