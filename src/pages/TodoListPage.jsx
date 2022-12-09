import React, { useState } from "react"
import TodoList from "../components/TodoList/TodoList"
import TodoHeader from "../components/TodoList/TodoHeader"

const filters = ["all", "active", "completed"]
const TodoListPage = () => {
  const [filter, setFilter] = useState(filters[0])

  return (
    <React.Fragment>
      <TodoHeader filters={filters} filter={filter} setFilter={setFilter} />
      <TodoList filter={filter} />
    </React.Fragment>
  )
}

export default TodoListPage
