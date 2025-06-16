import { useEffect, useState } from "react";

const getTheme = () => {
  return localStorage.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
};

export const useStyleTheme = () => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
};
