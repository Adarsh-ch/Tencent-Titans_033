import React from 'react';
import './App.css';

import '../src/Styles/Properties.css';
import { Properties } from './components/Properties';



const App: React.FC = () => {
  return (
    <div className="App">
      <Properties />
    </div>
  );
};

export default App;
