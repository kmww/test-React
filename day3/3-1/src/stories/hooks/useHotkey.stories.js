import { useState } from "react";
import useHotkey from "../../hooks/useHotkey";

export default {
  title: "Hook/useHotkey",
};

export const Global = () => {
  const hotkeys = [
    {
      global: true,
      combo: "meta+shift+k",
      onKeyDown: (e) => {
        alert("meta+shift+k");
      },
    },
    {
      global: true,
      combo: "esc",
      onKeyDown: (e) => {
        alert("esc");
      },
    },
  ];

  useHotkey(hotkeys);

  return (
    <div>
      <div>useHotkey_global</div>
    </div>
  );
};

export const Local = () => {
  const [value, setValue] = useState("");

  const hotkeys = [
    {
      global: false,
      combo: "meta+shift+k",
      onKeyDown: (e) => {
        // alert("meta+shift+k");
        setValue("");
      },
    },
    {
      global: false,
      combo: "esc",
      onKeyDown: (e) => {
        setValue("");
      },
    },
  ];

  const { handleKeyDown } = useHotkey(hotkeys);

  return (
    <div>
      <div>useHotkey_local</div>
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
