import React from 'react';
import { useLocation } from 'react-router-dom';
import BackgroundAnimation from '../BackgroundAni';
import './MainContent.css';

const MainContent: React.FC<{ section?: string }> = ({ section }) => {
  const location = useLocation();
  const currentSection = section || location.pathname.split('/')[1] || 'section1';

  return (
    <div className="main-content">
      <BackgroundAnimation />
      <section id="section1" className={`content-section ${currentSection === 'section1' ? 'active' : ''}`}>
        <h2>Section 1</h2>
        <p>Content for Section 1.</p>
      </section>
      <section id="section2" className={`content-section ${currentSection === 'section2' ? 'active' : ''}`}>
        <h2>Section 2</h2>
        <p>Content for Section 2.</p>
      </section>
      <section id="section3" className={`content-section ${currentSection === 'section3' ? 'active' : ''}`}>
        <h2>Section 3</h2>
        <p>Content for Section 3.</p>
      </section>
    </div>
  );
};

export default MainContent;