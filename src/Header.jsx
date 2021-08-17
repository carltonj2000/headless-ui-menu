import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, BeakerIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Leaders", href: "#" },
  { name: "Hikes", href: "#" },
  { name: "Contact", href: "#" },
];

const MenuItems = ({ currentMenu, setCurrentMenu }) => (
  <>
    {navigation.map(({ name, href }, i) => (
      <a
        {...{ href, key: i }}
        className={
          (currentMenu === i ? "bg-gray-600" : "bg-gray-700") +
          " px-2 py-1 rounded"
        }
        onClick={() => setCurrentMenu(i)}
      >
        {name}
      </a>
    ))}
    <button className="bg-red-400 text-gray-800 px-3 py-1 rounded-full">
      Take Action
    </button>
  </>
);
export default function MyDisclosure() {
  const [currentMenu, setCurrentMenu] = React.useState(0);
  return (
    <Disclosure as="nav" className="bg-gray-800 p-4">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between text-blue-300">
            <div className="flex items-center">
              <BeakerIcon className="h-10 w-10" />
              <div className="ml-4">
                <h1 className="text-xl font-bold">
                  Hike And Scramble Las Vegas
                </h1>
                <p>for fun, fitness and friendship</p>
              </div>
            </div>
            <div className="gap-4 items-center hidden md:flex">
              <MenuItems {...{ currentMenu, setCurrentMenu }} />
            </div>
            <Disclosure.Button className="md:hidden">
              {open ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="md:hidden text-blue-300 flex flex-col items-center bg-gray-700 p-4 gap-2">
            <MenuItems {...{ currentMenu, setCurrentMenu }} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
