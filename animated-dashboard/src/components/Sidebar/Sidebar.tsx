import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/section1">Section 1</Link></li>
          <li><Link to="/section2">Section 2</Link></li>
          <li><Link to="/section3">Section 3</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
