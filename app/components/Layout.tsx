import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {Theme} from '../utils/theme';
import {useSelector} from '../utils/declaration';
interface Props {
  children(
    loading: boolean,
    data: Array<Object> | string | undefined,
  ): React.ReactNode;
}

const Layout = (props: Props): JSX.Element => {
  const {loading, data} = useSelector((state) => state.filmsState);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Theme.lightSlateBlue,
        }}>
        <ActivityIndicator color="white" />
      </View>
    );
  }
  return (
    <ScrollView style={{backgroundColor: Theme.lightSlateBlue}}>
      {props.children(loading, data)}
    </ScrollView>
  );
};
export default Layout;
