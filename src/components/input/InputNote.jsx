import * as React from 'react';
import Label from './Label';
import TextArea from './TextArea';

export default function InputNote({ setFormAddNote, formAddNote }) {
  const handleInputTitle = (e) => {
    setFormAddNote({ ...formAddNote, body: e.target.value });
  };

  return (
    <Label
      htmlFor="title-note"
      className="flex flex-col gap-5 w-full"
    >
      <h3 className="text-textMedium font-medium">
        Catatanku
      </h3>
      <TextArea
        id="title-note"
        onInput={(e) => handleInputTitle(e)}
        value={formAddNote?.body}
        required
        placeholder="Tuliskan Catatanmu Disini..."
      />
    </Label>
  );
}
