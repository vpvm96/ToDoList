import React from "react"
import { FaTrash } from "react-icons/fa"
import styles from "./Todo.module.css"

const Todo = ({ todo, ListUpdateEvent, ListDeleteEvent }) => {
  const { id, text, status } = todo

  const handleCheckBoxChange = (e) => {
    const status = e.target.checked ? "completed" : "active"
    ListUpdateEvent({ ...todo, status })
  }

  const handleTodoButtonDelete = () => ListDeleteEvent(id)
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleCheckBoxChange}
      />
      <label
        htmlFor={id}
        className={status === "completed" ? styles.completed : styles.text}
      >
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleTodoButtonDelete} className={styles.button}>
          <FaTrash />
        </button>
      </span>
    </li>
  )
}

export default Todo
