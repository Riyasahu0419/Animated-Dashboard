// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import BackgroundAnimation from '../BackgroundAni';
// import './MainContent.css';

// const MainContent: React.FC<{ section?: string }> = ({ section }) => {
//   const location = useLocation();
//   const currentSection = section || location.pathname.split('/')[1] || 'section1';

//   return (
//     <div className="main-content">
//       <BackgroundAnimation />
//       <div>

//       <section id="section1" className={`content-section ${currentSection === 'section1' ? 'active' : ''}`}>
//         <h2>Section 1</h2>
//         {/* <img src="https://cdn1.dronahq.com/wp-content/uploads/2023/08/Dashboard-Image-Final.svg" alt="" /> */}
//         <p>Content for Section 1.</p>
//       </section>
//       <section id="section2" className={`content-section ${currentSection === 'section2' ? 'active' : ''}`}>
//       {/* <BackgroundAnimation /> */}
//         <h2>Section 2</h2>
//         <p>Content for Section 2.</p>
//       </section>
//       <section id="section3" className={`content-section ${currentSection === 'section3' ? 'active' : ''}`}>
//         <h2>Section 3</h2>
//         <p>Content for Section 3.</p>
//       </section>
//       </div>
//     </div>
//   );
// };

// export default MainContent;



import React from 'react';
import { useLocation } from 'react-router-dom';
import BackgroundAnimation from '../BackgroundAni';
import './MainContent.css';

const MainContent: React.FC<{ section?: string }> = ({ section }) => {
  const location = useLocation();
  const currentSection = section || location.pathname.split('/')[1] || 'section1';

  return (
    <div className="main-content">
      <div className='background-animation'>
      <BackgroundAnimation />

      </div>
      {section === 'section1' && (
        <section className="content-section">
          <h2>Section 1</h2>
          <p>Content for Section 1.</p>
        </section>
      )}
      {section === 'section2' && (
        <section className="content-section">
          <h2>Section 2</h2>
          <p>Content for Section 2.</p>
        </section>
      )}
      {section === 'section3' && (
        <section className="content-section">
          <h2>Section 3</h2>
          <p>Content for Section 3.</p>
        </section>
         )}
    
      </div>
    // </div>
  );
};

export default MainContent;
