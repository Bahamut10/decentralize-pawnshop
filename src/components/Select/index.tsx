'use client';

import { PawnItem } from '@/app/(landing)/types';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

type SelectProps = {
  label: string;
  selected: PawnItem;
  setSelected: (val: PawnItem) => void;
  className?: string;
  menuItem: Array<PawnItem>;
};

export default function Select(props: SelectProps) {
  const { label, selected, setSelected, menuItem = [] } = props;

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-stormy-gray">
        {label}
      </Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-stormy-gray shadow-sm ring-1 ring-inset ring-cloudy-gray focus:outline-none focus:ring-2 focus:ring-cloudy-gray sm:text-sm/6">
          <span className="ml-3 block truncate">{selected.item}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-stormy-gray ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {menuItem.map((item) => (
            <ListboxOption
              key={item.item}
              value={item}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-stormy-gray data-[focus]:bg-cloudy-gray"
            >
              <span className="ml-3 block truncate">{item.item}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-stormy-gray [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
