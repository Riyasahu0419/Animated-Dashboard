// import React from 'react';
// import './Header.css';

// const Header: React.FC = () => {


  
//   return (
//     <header className="header">
//       <h1>Animated Dashboard</h1>
//     </header>
//   );
// };





// export default Header;



import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import './Header.css';

const Header: React.FC = () => {
  const [Menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!Menu);
  };


  return (
    <header className="header">
      <h1>Animated Dashboard</h1>
      <div className="toggole">
        <button className="" onClick={toggleMenu}>
          {Menu ? (
            <FaTimes size={20} className="text-white" />
          ) : (
            <IoMdMenu size={20} className="text-white" />
          )}
        </button>
      </div>
      {Menu && (
        <div>

            <ul className="link">
            
          <li><Link to="/section1">Section 1</Link></li>
          <li><Link to="/section2">Section 2</Link></li>
          <li><Link to="/section3">Section 3</Link></li>
        
            </ul>
        </div>
         
         
        
        
      )}
    </header>
  );
};

export default Header;