import React from 'react';
import {ScrollView, View} from 'react-native';
import {images, RegistrationValues} from '../utils/data';
import {Theme} from '../utils/theme';
import RoleItem from '../components/RoleItem';
import Input from '../components/Input';
import {useSelector} from '../utils/declaration';

const HomeScreen: React.FC = () => {
  const {data} = useSelector((state) => state.loginState);
  const user = images.find((el, index) => index === data!.role);
  return (
    <ScrollView
      style={{backgroundColor: Theme.darkenSlateBlue}}
      contentContainerStyle={{alignItems: 'center', padding: 15}}>
      <View style={{alignItems: 'center'}}>
        <RoleItem scale={1} role={user} />
        {RegistrationValues.map((el) => {
          const {placeholder, secureTextEntry, fieldName, iconName} = el;
          return (
            <Input
              type={iconName}
              key={fieldName}
              placeholder={placeholder}
              value={data && data[fieldName]}
              secureTextEntry={secureTextEntry}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
