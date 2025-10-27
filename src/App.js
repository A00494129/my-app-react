import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import MyTown from './pages/MyTown';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <div style={styles.wrapper}>
      <div style={styles.nav}>
        <span
          onClick={() => setActivePage('about')}
          style={activePage === 'about' ? styles.activeLink : styles.link}
        >
          About Me
        </span>
        <span
          onClick={() => setActivePage('town')}
          style={activePage === 'town' ? styles.activeLink : styles.link}
        >
          My Town
        </span>
      </div>

      {activePage === 'about' ? <AboutMe /> : <MyTown />}
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: '20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start', 
    gap: '20px',
    marginBottom: '30px',
    fontSize: '18px',
    backgroundColor: 'transparent',
  },
  link: {
    color: '#000000ff',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  activeLink: {
    color: '#000000ff',
    cursor: 'pointer',
    textDecoration: 'underline', 
    fontWeight: 'bold',
  },
};

export default App;