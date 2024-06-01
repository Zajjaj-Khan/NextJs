"use client";
import { useState,useEffect } from "react";
import { useTheme } from "next-themes";
import { LuMoon } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <MdSunny color="yellow"/>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
            <LuMoon />
        </button>
      )}
    </div>
  );
};
export default ThemeChanger;
