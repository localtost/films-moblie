import React from 'react';
import FilmElement from './FilmItem';
import {Text, View} from 'react-native';
import {Theme} from '../utils/theme';

interface Props {
  data: Array<Object> | undefined;
}

const Filmlist: React.FC<Props> = ({data}) => {
  return data !== undefined ? (
    <>
      {data!.map((el: any, index: number) => (
        <FilmElement key={index} data={el} />
      ))}
    </>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.lightSlateBlue,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>No Data...</Text>
    </View>
  );
};
export default Filmlist;
