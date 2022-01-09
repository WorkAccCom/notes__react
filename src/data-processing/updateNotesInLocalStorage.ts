import { Note } from '../typedefs/Note';

export const updateNotesInLocalStorage = (
  data: Note[] | null,
) => {
  localStorage.setItem('notes', JSON.stringify(data));
};
