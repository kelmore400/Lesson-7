import React from 'react';
import './App.css';
import { Icon } from './components/Icon';
import { iconTypes} from './constants/icons';
import { Button } from './components/Button';
import { MarkList } from './components/MarkList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="customClass" id="id" iconType={iconTypes.plus}>first</Button>
        <Button className="customClass" size="small" color="primary" id="id">second</Button>

        <MarkList />
      </header>
    </div>
  );
}

export default App;
