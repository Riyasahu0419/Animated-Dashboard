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
          <h3>Overview</h3>
          <div className='s1'>

          <ul>
            <li>Total users</li>
            <li>Daily active users</li>
            <li>Revenue</li>
            <li>Customer acquisition cost (CAC)</li>
            <li>Customer lifetime value (CLTV)</li>
            <li>Line chart showing user growth over time</li>
          </ul>
          <br />
          
          </div>
          <img src="https://lh3.googleusercontent.com/proxy/6F5hcEP25YW0jBfhfzNCuCZzViLoPb8d8PF_CwNqJOVnQLYY06QvNKYomAdCE4HdCT0Zt_c3dFemdiegYrIMfwYFacOhGHM4w_R0PuwYU4O3gYOK0ySr_f2U_lgWhL_A-wqm1u4S"  alt="" />
        </section>
      )}
      {section === 'section2' && (
        <section className="content-section">
          <h2>Section 3</h2>
          <h3>Detailed Analysis</h3>
          <div className='s1'>

          <ul>
            <li>User demographics (age, gender, location)</li>
            <li>User behavior (feature usage, churn rate)</li>
            <li>Revenue by product or service</li>
            <li>Marketing campaign performance</li>
          </ul>
          <img src="https://fastercapital.com/i/Audience-targeting-Mastering-Audience-Targeting--Strategies-for-Effective-Marketing--Demographic-Targeting.webp" alt="" />
          </div>

        </section>
      )}
      {section === 'section3' && (
        <section className="content-section">
          <h2>Section 3</h2>
          <h3>Actions and Insights</h3>
          <div className='s1'>

          <ul>
            <li>Recommended marketing channels based on performance</li>
            <li>Suggestions for improving user engagement</li>
            <li>Projected revenue based on current trends</li>
          </ul>
          <img src="https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F5nC3UP3wGDcskOmimK0BiN%2F446a8d1492a250c74d4891c485673689%2Fmarketing-channels-with-most-promise-2023.png&w=3840&q=75" alt="" />
          </div>
          </section>
         )}
    
      </div>
    // </div>
  );
};

export default MainContent;
