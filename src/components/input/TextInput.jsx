import * as React from 'react';

export default function TextInput({
  onInput, value, id, placeholder, required,
}) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onInput={onInput}
      placeholder={placeholder}
      required={required}
      className="bg-transparent text-textMedium font-medium tracking-wider ring-1 ring-primary px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 placeholder:opacity-40 flex items-center "
    />
  );
}
