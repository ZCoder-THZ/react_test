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
      <div className="container w-[400px] mx-auto bg-gray-400 p-4 rounded-md mt-40">
        <h3 className='text-green-300 bg-black'>{text}</h3>
        <input className=' b-3' type="text" value={text} onChange={() => {
          setText(event.target.value)
        }}

          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleTodo()
            }
          }}
        />
        <button className='bg-blue-400 text-white px-2 rounded-md' onClick={handleTodo}>setTask</button>


        <ul>
          {
            todos.map((todo, i) => <li key={i}>{todo.task}</li>)
          }
        </ul>

      </div>
    </>
  )
}

export default App
