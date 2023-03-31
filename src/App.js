import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To do app</h1>
      <div className ="todo-wrapper">
        <div className='todo-input'>
          <div className='todo-input-itemdddadf'>
            <label>Title</label>
            <input type="text" placeholder="What's the task title?" />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder="What's the task description?" />
          </div>
          <div className='todo-input-item'>
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
