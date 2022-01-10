import { deleteNoteFromLocalStorage } from './deleteNoteFromLocalStorage';
import { getNotesFromLocalStorage } from './getNotesFromLocalStorage';
import { Note } from '../typedefs/Note';

type DeleteNote = (
  id: number,
  setDeleteNoteModalRendered: (par: boolean) => void,
  listRerenderQuery: (par: Note[] | null) => void,
) => void;

export const deleteNote: DeleteNote = (
  noteForDeleteId,
  setDeleteNoteModalRendered,
  listRerenderQuery,
) => {
  deleteNoteFromLocalStorage(noteForDeleteId);
  setDeleteNoteModalRendered(false);
  listRerenderQuery(getNotesFromLocalStorage());
};
