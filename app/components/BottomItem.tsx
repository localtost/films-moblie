import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
type Props = {
  iconName: string;
  isCurrent?: boolean;
};
const BottomMenuItem: React.FC<Props> = ({iconName, isCurrent}) => {
  const name: string = iconName === 'Scan1' ? 'Scan' : iconName;
  return (
    <View style={styles.container}>
      <AntDesign
        name={iconName.toLowerCase()}
        size={35}
        style={{color: isCurrent ? 'black' : 'grey'}}
      />
      <Text style={styles.text}>{name}</Text>
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
