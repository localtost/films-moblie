import React from 'react';
import {TextInput, View, Dimensions} from 'react-native';
import {Theme} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {setSearchValue} from '../../state/films/actionCreators';
import {useSelector} from '../../utils/declaration';

const SCREEN_WIDTH = Dimensions.get('screen').height;

const HomeHeader: React.FC = () => {
  const {value} = useSelector((state) => state.filmsState);
  const dispatch = useDispatch();
  const handleChange = (event: string): void => {
    dispatch(setSearchValue(event));
  };
  return (
    <View
      style={{
        margin: 5,
        padding: 5,
        backgroundColor: Theme.white,
        width: '100%',
        borderBottomWidth: 0,
      }}>
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={(e) => handleChange(e)}
        style={{width: SCREEN_WIDTH / 3, padding: 5}}
      />
    </View>
  );
};
export default HomeHeader;
