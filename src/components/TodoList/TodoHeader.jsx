import React from "react"
import { useDarkMode } from "../../context/DarkModeContext"
import styles from "./TodoHeader.module.css"
import { HiMoon, HiSun } from "react-icons/hi"

const TodoHeader = ({ filters, filter, setFilter }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, i) => (
          <li key={i}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => setFilter(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default TodoHeader
