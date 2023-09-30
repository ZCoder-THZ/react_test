import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let [text, setText] = useState('');

  let [todos, setTodos] = useState([
    {
      task: 'cutting grass',
      time: '12:00am'
    },
    {
      task: 'mowing the lawn',
      time: '1:00am'
    }, {
      task: 'go to fucking gym',
      time: '2:00am'
    }

  ])

  const counter = () => {

    if (count >= 10) {
      setCount(0)
    } else { setCount(count++) }

  }

  const handleTodo = () => {


    setTodos([...todos, { task: text }]);
    setText('');



  }

  return (
    <>
      <h3>{text}</h3>
      <input type="text" value={text} onChange={() => {
        setText(event.target.value)
      }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleTodo()
          }
        }}
      />

      <ul>
        {
          todos.map((todo, i) => <li key={i}>{todo.task}</li>)
        }
      </ul>

      <button onClick={handleTodo}>setTask</button>
    </>
  )
}

export default App
