import React, {Fragment} from 'react';
import {Animated, Image, StyleSheet, Text} from 'react-native';
import {Item} from '../utils/data';

interface Props {
  scale: number | Animated.Value;
  role: Item | undefined;
}

const RoleItem: React.FC<Props> = ({role, scale}) => {
  return (
    <Fragment>
      <Animated.View style={{transform: [{scale: scale}]}}>
        <Text style={[styles.elTitle, {color: role!.color}]}>
          {role!.title}
        </Text>
      </Animated.View>
      <Animated.View style={{transform: [{scale: scale}]}}>
        <Image
          source={role!.url}
          resizeMethod="scale"
          style={{width: 120, height: 120}}
        />
      </Animated.View>
    </Fragment>
  );
};
export default RoleItem;

const styles = StyleSheet.create({
  elTitle: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
