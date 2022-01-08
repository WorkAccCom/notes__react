import React, { useState } from 'react';

export const Edit: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const inputChangeHandle = (event: any) => {
    switch (event.target.id) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'text':
        setText(event.target.value);
        break;
      default:
    }

    // eslint-disable-next-line
    console.log(event)
  };

  return (
    <form
      action="get"
      onSubmit={() => {}}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={inputChangeHandle}
        id="title"
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={inputChangeHandle}
        id="text"
      />
    </form> 
  );
};
