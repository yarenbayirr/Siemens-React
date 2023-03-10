import { useState } from 'react'
import Todologo from './components/Todologo'
import Todoinput from './components/Todoinput'
import Todolist from './components/TodoList'
import Todofilter from './components/Todofilter'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  return (
    <div className="App">
     <Todologo/>
     <Todoinput setTodos={setTodos}/>
     <Todolist todos={todos}/>
     <Todofilter todos={todos}/>
    </div>
  )
}

export default App
