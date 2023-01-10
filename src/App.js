import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'task 1',
      date: 'January 1, 2069',
      description: 'loren impsum dolor',
      reminder: true,
    },
    {
      id: 2,
      name: 'bwisit loren',
      date: 'Janury 2, 2071',
      description: 'loren impsum dolor',
      reminder: false,
    },
  ]);
  function deleteTask(id) {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addTask(test) {
    console.log(test);
  }

  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
