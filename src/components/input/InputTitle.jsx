import * as React from 'react';
import Label from './Label';
import TextInput from './TextInput';

const limitLength = 50;

export default function InputTitle({ setFormAddNote, formAddNote }) {
  const [characterCount, setCharacterCount] = React.useState(formAddNote?.title.length ?? 0);

  const handleInputTitle = (e) => {
    if (e.target.value.length <= limitLength) {
      setCharacterCount(e.target.value.length);
      setFormAddNote({ ...formAddNote, title: e.target.value });
    }
  };

  return (
    <Label
      htmlFor="title-note"
      className="flex flex-col gap-5 w-full"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-textMedium font-medium">
          Judul Buku
        </h3>
        <h3 className="text-textMedium font-medium">
          {`Sisa karakter: ${limitLength - characterCount}`}
        </h3>
      </div>
      <TextInput
        id="title-note"
        onInput={(e) => handleInputTitle(e)}
        value={formAddNote?.title}
        required
        placeholder="Masukkan Judul..."
      />
    </Label>
  );
}
