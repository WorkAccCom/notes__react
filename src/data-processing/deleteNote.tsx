import { deleteNoteFromLocalStorage } from './deleteNoteFromLocalStorage';
import { getNotesFromLocalStorage } from './getNotesFromLocalStorage';
import { Note } from '../typedefs/Note';

type DeleteNote = (
  id: number,
  setConfirmationModalRendered: (par: boolean) => void,
  listRerenderQuery?: (par: Note[] | null) => void,
  cleanUpNoteForEdit?: (par: Note | null) => void,
) => void;

export const deleteNote: DeleteNote = (
  noteForDeleteId,
  setConfirmationModalRendered,
  listRerenderQuery,
  cleanUpNoteForEdit,
) => {
  deleteNoteFromLocalStorage(noteForDeleteId);
  setConfirmationModalRendered(false);

  if (listRerenderQuery && cleanUpNoteForEdit) {
    listRerenderQuery(getNotesFromLocalStorage());
    cleanUpNoteForEdit(null);
  }
};
