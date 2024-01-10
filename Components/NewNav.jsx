import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  {
    name: "Closets",
    href: "#",
    current: false,
    children: [
      { name: "Walk-In Closets", href: "#" },
      { name: "Reach-In Closets", href: "#" },
    ],
  },
  {
    name: "Cabinetry",
    href: "#",
    current: false,
    children: [
      { name: "Mudrooms", href: "#" },
      { name: "Laundry", href: "#" },
      { name: "Pantry & Kitchen", href: "#" },
      { name: "Office", href: "#" },
      { name: "Garage", href: "#" },
  
    ],
  },
  { name: "Finishes", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
  return (
    <Disclosure as="nav" className="bg-gray-800 pt-24 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {item.name}
                        </a>
                        {/* Render dropdown if item has children */}
                        {item.children && activeDropdown === item.name && (
                          <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                              {item.children.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
