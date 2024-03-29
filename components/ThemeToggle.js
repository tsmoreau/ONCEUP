// ./components/ThemeChanger.js
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const themes = [
  { name: "Dark" },
  { name: "Light" },
  { name: "Emerald" },
  { name: "Pink" }
];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    updateThemeToLocal();
  }, []);

  function updateThemeToLocal() {
    console.log("Theme");
    console.log(theme);
    if (theme === "dark") {
      setIsOn(true);
    } else if (theme === "light") {
      setIsOn(false);
    }
  }

  const [isOn, setIsOn] = useState(mounted);

  if (!mounted) return null;

  function DarkModeToggle() {
    function toggle() {
      console.log("Test ");
      console.log(theme);
      console.log(isOn);

      if (isOn === true) {
        setIsOn(false);
        setTheme("light");
      } else if (isOn === false) {
        setIsOn(true);
        setTheme("dark");
      }
    }

    function handleClick() {
      toggle();
    }

    function handleKeyDown({ key }) {
      if (key === "Enter") toggle();
    }

    return (
      <div
        role="checkbox"
        aria-checked={isOn ? "true" : "false"}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        className={`cursor-pointer w-6 h-6 rounded-full relative px-1.5 flex items-center${
          isOn ? "" : " justify-end"
        }`}
      >
        
        {isOn ? (
         <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-3 w-3 text-white"
         viewBox="0 0 20 20"
         fill="currentColor"
       >
         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
       </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    );
  }

  return (
    <div className="flex">
      <DarkModeToggle />

      <style jsx>{`
        #switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
      `}</style>
    </div>
  );
};

export default ThemeChanger;
