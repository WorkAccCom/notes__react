import { deleteNoteFromLocalStorage } from './deleteNoteFromLocalStorage';
import { getNotesFromLocalStorage } from './getNotesFromLocalStorage';
import { Note } from '../typedefs/Note';

type DeleteNote = (
  id: number,
  setConfirmationModalRendered: (par: boolean) => void,
  listReRenderQuery?: (par: Note[] | null) => void,
  cleanUpNoteForEdit?: (par: Note | null) => void,
) => void;

export const deleteNote: DeleteNote = (
  noteForDeleteId,
  setConfirmationModalRendered,
  listReRenderQuery,
  cleanUpNoteForEdit,
) => {
  deleteNoteFromLocalStorage(noteForDeleteId);
  setConfirmationModalRendered(false);

  if (listReRenderQuery) {
    listReRenderQuery(getNotesFromLocalStorage());
  }

  if (cleanUpNoteForEdit) {
    cleanUpNoteForEdit(null);
  }
};
