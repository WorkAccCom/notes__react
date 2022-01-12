import { getNotesFromLocalStorage } from './getNotesFromLocalStorage';
import { updateNotesInLocalStorage } from './updateNotesInLocalStorage';

export const editNoteInLocalStorage = (
  targetNoteId: number,
  title: string,
  text: string,
) => {
  const notes = getNotesFromLocalStorage();

  if (notes) {
    const preparedNote = {
      id: targetNoteId,
      title,
      text,
    };

    const targetNoteIndex = notes.findIndex(
      ({ id }) => id === targetNoteId,
    );

    const editedNotes = [...notes];

    editedNotes.splice(
      targetNoteIndex,
      1,
      preparedNote,
    );

    updateNotesInLocalStorage(editedNotes);
  }
};
