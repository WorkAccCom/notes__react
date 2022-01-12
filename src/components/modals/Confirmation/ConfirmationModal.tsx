import React from 'react';
import ReactModal from 'react-modal';
import { useHistory } from 'react-router-dom';

import { Note } from '../../../typedefs/Note';

interface Props {
  isOpen: boolean,
  changeModalRenderStatus: (par: boolean) => void,
  buttonName: string,
  functionOnConfirmation: (par?: any, par2?: any, par3?: any, par4?: any) => void,
  noteForDeleteId?: number,
  listRerenderQuery?: (par: Note[] | null) => void,
  cleanUpNoteForEdit?: (par: Note | null) => void,
}

export const ConfirmationModal: React.FC<Props> = ({
  isOpen,
  changeModalRenderStatus,
  buttonName,
  functionOnConfirmation,
  noteForDeleteId = -1,
  listRerenderQuery,
  cleanUpNoteForEdit,
}) => {
  const history = useHistory();

  const handleClickOnYesButton = () => {
    switch (buttonName) {
      case 'delete': {
        functionOnConfirmation(
          noteForDeleteId,
          changeModalRenderStatus,
          listRerenderQuery,
          cleanUpNoteForEdit,
        );

        history.push('/');

        break;
      }

      case 'save':
      case 'cancel': {
        if (functionOnConfirmation) {
          functionOnConfirmation();
        }

        break;
      }

      default:
        break;
    }
  };

  const titleSelect = (name: string): string => {
    const titleStart = 'Are you sure want to';

    switch (name) {
      case 'delete':
        return `${titleStart} delete this note?`;

      case 'save':
        return `${titleStart} save this note?`;

      case 'cancel':
        return `${titleStart} cancel editing?`;

      default:
        return '';
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc
      onRequestClose={() => {
        changeModalRenderStatus(false);
      }}
    >
      <h2>{titleSelect(buttonName)}</h2>
      <button
        type="button"
        onClick={handleClickOnYesButton}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => changeModalRenderStatus(false)}
      >
        No
      </button>
    </ReactModal>
  );
};
