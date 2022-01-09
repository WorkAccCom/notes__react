import { getNotesFromLocalStorage } from './getNotesFromLocalStorage';
import { Note } from '../typedefs/Note';
import { updateNotesInLocalStorage } from './updateNotesInLocalStorage';

export const addNoteToLocalStorage = (
  title: string,
  text: string,
) => {
  if (title || text) {
    let notes: Note[] | null = getNotesFromLocalStorage();

    if (!notes) {
      notes = [];
    }

    const noteToPush = {
      id: notes.length
        ? notes[notes.length - 1].id + 1
        : 0,
      title: title || null,
      text: text || null,
    };

    notes.push(noteToPush);

    updateNotesInLocalStorage(notes);
  }
};
