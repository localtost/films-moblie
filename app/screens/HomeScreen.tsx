import React from 'react';
import Layout from '../components/Layout';
import Filmlist from '../components/FilmList';

const HomeScreen: React.FC = () => {
  return <Layout>{(loading, data) => <Filmlist data={data} />}</Layout>;
};

export default HomeScreen;
