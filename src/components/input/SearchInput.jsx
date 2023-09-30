import * as React from 'react';

export default function SearchInput({ value, onInput, id }) {
  return (
    <input
      type="search"
      placeholder="Cari bedasarkan judul..."
      value={value}
      onInput={onInput}
      id={id}
      name={id}
      className="bg-transparent text-textMedium font-medium tracking-wider ring-1 ring-primary px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 placeholder:opacity-40"
    />
  );
}
