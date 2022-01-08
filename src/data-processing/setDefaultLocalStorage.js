const defaultNotes = [
  {
    id: 0,
    title: 'First note title',
    text: 'This is a text content of the first default note',
  },
  {
    id: 1,
    title: 'Second note title',
    text: 'This is a text content of the second default note',
  },
];

export const setDefaultLocalStorage = () => {
  localStorage.setItem('notes', JSON.stringify(defaultNotes));
};
