import Axios from 'axios';

interface SearchFields {
  searchTitle: string;
  searchPage: number;
}

export const fetchFilmsBySearch = async ({
  searchTitle,
  searchPage,
}: SearchFields): Promise<T> =>
  await Axios.get(
    `http://www.omdbapi.com/?s=${searchTitle}&page=${searchPage}&apikey=1c8e961a`,
  );

export const fetchFilmsByTitle = async (title: string): Promise<void> =>
  await Axios.get(`http://www.omdbapi.com/?t=${title}&apikey=1c8e961a`);
