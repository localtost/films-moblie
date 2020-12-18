import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import BottomMenuItem from './BottomItem';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const totalWidth: number = Dimensions.get('window').width;
  const [translateValue] = useState<Animated.AnimatedValue>(
    new Animated.Value(0),
  );
  const tabWidth: number = totalWidth / state.routes.length;
  return (
    <View style={[style.tabContainer, {width: totalWidth}]}>
      <View style={{flexDirection: 'row'}}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{translateX: translateValue}],
              width: tabWidth - 20,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 20,
              useNativeDriver: true,
            }).start();
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{flex: 1}}
              key={index}>
              <BottomMenuItem
                iconName={label.toString()}
                isCurrent={isFocused}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    height: 65,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: 'white',
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  slider: {
    height: 3,
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    width: 50,
  },
});
export default TabBar;
