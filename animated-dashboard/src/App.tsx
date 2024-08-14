
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<MainContent section="section1" />} />
            <Route path="/section1" element={<MainContent section="section1" />} />
            <Route path="/section2" element={<MainContent section="section2" />} />
            <Route path="/section3" element={<MainContent section="section3" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;