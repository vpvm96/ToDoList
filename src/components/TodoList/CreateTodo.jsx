import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styles from "./CreateTodo.module.css"

const TodoCard = ({ TodoCreateEvent }) => {
  const [text, setText] = useState("")

  const handleTodoInputChange = (e) => setText(e.target.value)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === "") return
    TodoCreateEvent({ id: uuidv4(), text, status: "active" })
    setText("")
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Create Todo"
        value={text}
        onChange={handleTodoInputChange}
      />
      <button className={styles.button}>Create</button>
    </form>
  )
}

export default TodoCard
