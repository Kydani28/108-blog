import { useState } from "react";
import "./App.css";

// Did this with Leopoldo : Class 3
function App(){
  // A list (array) of tasks. Each task is an unique object.
  // STATE: the list of tasks. When it changes, REact updates
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn react'},
    { id: 2, text: 'Practice Code'},
  ]);

    // STATE: What the user is typing in the box
  const [text, setText] = useState('');

  // ADD: runs when the add butrton is clicked
  function handleAdd() {
    // Stop here if the box is empty
    if(text.trim() === '' )
      return;

    const newTask = { id: Date.now(), text: text}
    setTasks([...tasks, newTask]); // copy old task + add new ones
    setText(''); // empty input box
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <input text="text" placeholder="Write a task..."
      value={text} onChange={(event) => setText(event.target.value) }/>

      <button onClick={handleAdd}>Add</button>

      <p>You Typed: {text}</p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>

        ))}
      </ul>
      <hr />
      <CounterDemo />
    </div>
  );
}



// This is my Code from Class 2 

function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Buenas, Class 72!</h1>
      <p>Welcome to Kydani Chaparro's React app!</p>

      <CounterWithSharedState
        title="Counter 1"
        count={count}
        setCount={setCount}
      />

      <CounterWithSharedState
        title="Counter 2"
        count={count}
        setCount={setCount}
      />

      <CounterWithSharedState
        title="Counter 3"
        count={count}
        setCount={setCount}
      />

      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function CounterWithSharedState({ title, count, setCount }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Local Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
