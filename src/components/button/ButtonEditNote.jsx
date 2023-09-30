import * as React from 'react';
import { BiEditAlt } from 'react-icons/bi';

export default function ButtonEditNote({ onClick }) {
  return (
    <button
      type="button"
      name="edit note"
      title="Edit Catatan"
      onClick={onClick}
      className="min-w-[44px] min-h-[44px] absolute top-[10px] right-2  text-sky-500 flex items-center justify-center gap-2 font-[500] tracking-wide hover:opacity-75"
    >
      <span className="text-xl">
        <BiEditAlt />
      </span>
    </button>
  );
}
