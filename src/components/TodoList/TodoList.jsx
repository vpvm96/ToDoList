import React, { useEffect, useState } from "react"
import TodoCard from "./CreateTodo"
import Todo from "./Todo"
import styles from "./TodoList.module.css"

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(readTodosFormLocalStorage)

  const handleTodoCreate = (todo) => setTodos([...todos, todo])

  const handleListUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))

  const handleListDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted))

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const filtered = handleFilteredItemsGet(todos, filter)

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            ListUpdateEvent={handleListUpdate}
            ListDeleteEvent={handleListDelete}
          />
        ))}
      </ul>
      <TodoCard TodoCreateEvent={handleTodoCreate} />
    </section>
  )
}

function readTodosFormLocalStorage() {
  const todos = localStorage.getItem("todos")
  return todos ? JSON.parse(todos) : []
}

function handleFilteredItemsGet(todos, filter) {
  if (filter === "all") {
    return todos
  }
  return todos.filter((todo) => todo.status === filter)
}

export default TodoList
