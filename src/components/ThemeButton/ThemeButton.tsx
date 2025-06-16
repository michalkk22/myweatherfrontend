import React from "react";
import { useStyleTheme } from "../../hooks/useStyleThemeHook";
import "./style.css"

const ThemeButton = () => {
    const [theme, setTheme] = useStyleTheme();

    return (
        <button className="theme-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    )
}

export default ThemeButton;