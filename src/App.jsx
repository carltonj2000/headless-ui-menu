import React from "react";
import { Menu } from "@headlessui/react";

import Header from "./Header";

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/documentation">
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

function App() {
  return (
    <>
      <Header />
      <h1 className="text-center mt-4">Hello World</h1>
    </>
  );
}

export default App;
