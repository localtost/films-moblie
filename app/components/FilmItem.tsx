import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';
import {FilmItem} from '../state/films/actionCreators';
interface Props {
  data: FilmItem;
}

const FilmElement: React.FC<Props> = ({data}) => {
  const {Poster, Plot, Title} = data;
  return (
    <View style={style.container}>
      <Image source={{uri: Poster}} style={style.img} />
      <View style={{paddingLeft: 10, width: '80%'}}>
        <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
          {Title}
        </Text>
        <Text style={{color: 'white', paddingTop: 10}}>{Plot}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    width: '90%',
    borderBottomColor: Theme.white,
    borderBottomWidth: 1,
    margin: 10,
    flexDirection: 'row',
  },
  img: {
    width: 80,
    height: 150,
  },
});
export default FilmElement;
