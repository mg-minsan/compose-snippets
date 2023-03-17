import { Combobox, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useRouter } from 'next/router';

const CommandPalette = ({ slugs }: { slugs: string[] }) => {
  const [query, setQuery] = React.useState('');

  const filteredSlugs =
    query === ''
      ? slugs
      : slugs.filter((slug) =>
          slug
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  const router = useRouter();

  return (
    <>
      <Combobox
        onChange={(value: string) => {
          router.push(`/${value}`);
        }}
      >
        <div className="relative w-full cursor-default rounded-lg bg-white text-left shadow-md sm:text-sm divide-y divide-gray-100">
          <div className="flex items-center px-4">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <Combobox.Input
              onChange={(e) => setQuery(e.target.value)}
              className="px-2 w-full bg-transparent border-0 text-sm text-gray-800 placeholder-gray-400 h-12 focus:ring-transparent focus:outline-none  focus:ring-0 hover:ring-0 focus-visible:ring-0"
              placeholder="Search..."
            />
          </div>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="z-10 absolute w-full max-h-44 text-sm overflow-y-auto font-medium -mt-2 rounded-b-lg">
              {filteredSlugs.length > 0 ? (
                filteredSlugs.map((slug) => (
                  <>
                    <Combobox.Option key={slug} value={slug}>
                      {({ active }) => (
                        <div
                          className={`px-4 py-1 ${
                            active ? 'bg-indigo-600' : 'bg-white'
                          }`}
                        >
                          <span
                            className={`${
                              active ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {slug}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  </>
                ))
              ) : (
                <div className="bg-white px-4 py-1 text-sm font-medium text-gray-900 h-8">
                  <span>No Results Found</span>
                </div>
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};

export default CommandPalette;
