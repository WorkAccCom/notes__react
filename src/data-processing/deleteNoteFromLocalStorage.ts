import { getNotesFromLocalStorage } from './getNotesFromLocalStorage';
import { updateNotesInLocalStorage } from './updateNotesInLocalStorage';

export const deleteNoteFromLocalStorage = (targetId: number) => {
  const notes = getNotesFromLocalStorage();
  const updatedNotes = notes?.filter(({ id }) => id !== targetId);

  updateNotesInLocalStorage(updatedNotes || null);
};
