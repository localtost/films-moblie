import {ImageSource} from 'react-native-vector-icons/Icon';
import {Theme} from "./theme";

interface Item {
  url: ImageSource;
  title: string;
  color: string;
}

export const images: Item[] = [
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
