import { getLocalStorageData } from './getLocalStrageData';
import { Note } from '../typedefs/Note';

export const updateLocalStorage = (
  title: string,
  text: string,
) => {
  if (title || text) {
    let notes: Note[] | null = getLocalStorageData();

    if (!notes) {
      notes = [];
    }

    const noteToPush = {
      id: notes ? notes.length + 1 : 0,
      title: title || null,
      text: text || null,
    };

    notes.push(noteToPush);

    localStorage.setItem('notes', JSON.stringify(notes));
  }
};
