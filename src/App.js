import React from 'react';
import './App.css';
import { Icon } from './homework/Icon';
import { iconTypes} from './constants/icons';
import { Button } from './components/Button';
import { MarkList } from './components/MarkList';
import { TodoList } from './homework/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="homework">
          <h2>HomeWork</h2>
          <TodoList />
        </div>
        <div>
        <h2>Work at Class</h2>
        <Button className="customClass" id="id" iconType={iconTypes.plus}>first</Button>
        <Button className="customClass" size="small" color="primary" id="id">second</Button>
        <MarkList />
        </div>
      </header>
    </div>
  );
}

export default App;
