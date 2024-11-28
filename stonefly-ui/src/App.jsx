import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1">
        <Header />
        <Dashboard />
        <Content />
      </div>
    </div>
  );
};

export default App;
