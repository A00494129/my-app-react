import React from 'react';
import girlIcon from '../assets/girl.png'; 

const AboutMe = () => {
  return (
    <div style={styles.page}>
      <img src={girlIcon} alt="Girl Icon" style={styles.icon} />
      <h2>Hi, I'm BINZIYA</h2>
      <p>I'm an MCDA student at SMU.</p>
      <p>I love adventures—exploring places, food, sports, and singing!</p>
      <p>I joined MCDA to gain a broad view of working with data.</p>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  icon: {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
};

export default AboutMe;