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
      time: '12:00am',
      id: 1
    },
    {
      task: 'mowing the lawn',
      time: '1:00am',
      id: 2
    }, {
      task: 'go to fucking gym',
      time: '2:00am',
      id: 3
    }

  ])

  const counter = () => {

    if (count >= 10) {
      setCount(0)
    } else { setCount(count++) }

  }

  const handleTodo = () => {


    // Remove white spaces using regex


    // Count the length of the modified string
    const textLength = text.replace(/\s+/g, "").length;

    if (textLength) {
      setTodos([...todos, { task: text, id: todos.length + 1 }]);
      setText('');

    } else {
      alert('nope')
    }



  }
  const removeList = (id) => {

    const task = todos.filter(i => i.id !== id);
    setTodos(task);

  }

  return (
    <>
      <div className="rounded-md mt-32 container mx-auto flex justify-center flex-col w-[130%]">
        <div className="px-4 py-7 mx-auto border">
          <h1 className="text-center mt-4 text-3xl ">To Do List</h1>

          <div className="flex align-center ">
            <input className='bg-green-100 py-1' type="text" value={text} onChange={() => {
              setText(event.target.value)
            }}

              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleTodo()
                }
              }}
            />
            <button className='py-1 px-3 text-white bg-green-400' onClick={handleTodo}>setTask</button>
          </div>



          <ul className='list-none mt-5  flex flex-col justify-content-between align-center'>
            {
              todos.map((todo) => <li key={todo.id} className='flex align-center justify-between my-2'>
                <h3 className=''>{todo.task}</h3>
                <button className='ml-5  block  bg-red-400 text-white py-1 px-3 rounded-md' onClick={() => removeList(todo.id)}>remove </button> </li>)
            }
          </ul>

        </div>

      </div>
    </>
  )
}

export default App
