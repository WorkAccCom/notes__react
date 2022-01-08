import { Note } from '../typedefs/Note';

export const getLocalStorageData = (): Note[] | null => {
  const localStorageData = localStorage.getItem('notes');

  if (typeof localStorageData === 'string') {
    return JSON.parse(localStorageData);
  }

  return localStorageData;
};
