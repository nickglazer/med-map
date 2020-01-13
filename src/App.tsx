import React from 'react';

import ActionsBar from './components/ActionsBar';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ActionsBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
