import React from 'react';
import {TextInput, View} from 'react-native';
import {Theme} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {setSearchValue} from '../../state/films/actionCreators';
import {useSelector} from '../../utils/declaration';

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
        borderRadius: 10,
      }}>
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={(e) => handleChange(e)}
        style={{width: 290, paddingLeft: 10}}
      />
    </View>
  );
};
export default HomeHeader;
