import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '../utils/theme';

type Props = {
  iconName: string;
  isCurrent?: boolean;
};
const BottomMenuItem: React.FC<Props> = ({iconName, isCurrent}) => {
  const width: number = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <AntDesign
        name={iconName.toLowerCase()}
        size={width / 15}
        style={{color: isCurrent ? Theme.white : Theme.darkenSlateBlue}}
      />
    </View>
  );
};
export default BottomMenuItem;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    paddingTop: 5,
  },
});
