import { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    handleDarkModeUpdate(!darkMode)
  }

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    handleDarkModeUpdate(isDark)
  }, [])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const handleDarkModeUpdate = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark")
    localStorage.theme = "dark"
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.theme = "light"
  }
}

export const useDarkMode = () => useContext(DarkModeContext)
