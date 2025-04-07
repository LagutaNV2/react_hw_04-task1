// App.tsx

import React from 'react';
import { ColorConverter } from './components/ColorConverter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <ColorConverter />
    </div>
  );
};

export default App;
