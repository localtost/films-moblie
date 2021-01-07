import { ImageSource } from 'react-native-vector-icons/Icon';
import { Theme } from './theme';

export interface Item {
  url: ImageSource;
  title: string;
  color: string;
}
export interface InputData {
  iconName: string;
  fieldName: string;
  placeholder: string;
  secureTextEntry?: boolean;
}
export const images: Array<Item> = [
  {
    url: require('../assets/sign-up/user.png'),
    title: 'Junior',
    color: Theme.lightGreen,
  },
  {
    url: require('../assets/sign-up/user.png'),
    title: 'Middle',
    color: Theme.standardBlue,
  },
  {
    url: require('../assets/sign-up/user.png'),
    title: 'Senior',
    color: Theme.tomato,
  },
];

export const RegistrationValues: Array<InputData> = [
  {
    iconName: 'user',
    fieldName: 'username',
    placeholder: 'User Name',
  },
  {
    iconName: 'mail',
    fieldName: 'email',
    placeholder: 'Email',
  },
  {
    iconName: 'lock',
    fieldName: 'password',
    placeholder: 'Password',
    secureTextEntry: true,
  },
  {
    iconName: 'lock',
    fieldName: 'confirm',
    placeholder: 'Confirm Password',
    secureTextEntry: true,
  },
];
