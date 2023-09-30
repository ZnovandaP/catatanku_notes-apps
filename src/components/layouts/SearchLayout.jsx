import * as React from 'react';
// * components
import Label from '../input/Label';
import SearchInput from '../input/SearchInput';

export default function SearchLayout({ onChange, value }) {
  return (
    <section className="pt-28 flex justify-center items-center px-8 ">
      <Label
        htmlFor="search-note"
        className="flex justify-center items-center flex-col gap-5 w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] z-[2]"
      >
        <h2 className="text-textMedium font-semibold font-script text-3xl">
          Mencari Catatan
        </h2>

        <SearchInput
          id="search-note"
          onChange={onChange}
          value={value}
        />
      </Label>
    </section>
  );
}
