import {v4 as uuidv4} from 'uuid';

export const transformResponseData = (data = []) => {
  if (!data || !data.length) {
    return data;
  }
  const transformData = [];
  const map = new Map();
  data.forEach(({data}: any) => {
    map.set(data.Title, data);
  });
  for (let [_, value] of map) {
    transformData.push({
      Plot: value.Plot,
      Poster: value.Poster,
      Title: value.Title,
      Favorite: false,
      id: uuidv4(),
    });
  }
  return transformData;
};
