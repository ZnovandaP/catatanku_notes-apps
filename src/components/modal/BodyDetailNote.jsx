import * as React from 'react';
import TableDetailNoteLayout from '../layouts/TableDetailNoteLayout';

export default function BodyDetailNote({ notes, modalIsOpen }) {
  const currentNote = notes?.find((note) => note?.id === modalIsOpen.id);

  return (
    <section className="min-h-full p-8 md:p-12">
      <TableDetailNoteLayout note={currentNote} />
    </section>
  );
}
