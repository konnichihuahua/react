import { useState } from 'react';
function AddTask({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  function onSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert('please insert text');
      return;
    }

    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div>
        <label> Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <label> Day & Time </label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div>
        <label> Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <div>
        <label> Submit</label>
        <input type='submit' value='Save Task' />
      </div>
    </form>
  );
}

export default AddTask;
