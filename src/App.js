import React from "react"
import "./App.css"
import { DarkModeProvider } from "./context/DarkModeContext"
import TodoListPage from "./pages/TodoListPage"

function App() {
  return (
    <React.Fragment>
      <DarkModeProvider>
        <TodoListPage />
      </DarkModeProvider>
    </React.Fragment>
  )
}

export default App
