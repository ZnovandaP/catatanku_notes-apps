import * as React from 'react';

export default function SearchInput({ value, onChange, id }) {
  return (
    <input
      type="search"
      placeholder="Cari bedasarkan judul..."
      value={value}
      onChange={onChange}
      id={id}
      name={id}
      className="bg-transparent text-textMedium font-medium tracking-wider ring-1 ring-primary px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 placeholder:opacity-40"
    />
  );
}
