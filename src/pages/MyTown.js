import React, { useState, useEffect } from 'react';
import keralaPhoto from '../assets/kerala.jpg';
import sunnyIcon from '../assets/sunny.png';
import mildIcon from '../assets/mild.png';
import coldIcon from '../assets/cold.png';

const MyTown = () => {
  const [unit, setUnit] = useState('C');
  const [temperatureC, setTemperatureC] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log('API Key:', apiKey);
  useEffect(() => {
    if (!apiKey) {
      console.error('API key is missing');
      setError(true);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Malappuram&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.main && data.main.temp !== undefined) {
          setTemperatureC(Math.round(data.main.temp));
        } else {
          console.error('Temperature data missing:', data);
          setError(true);
        }
      })
      .catch((err) => {
        console.error('Weather fetch failed:', err);
        setError(true);
      });
  }, [apiKey]);

  const temperatureF =
    temperatureC !== null ? Math.round((temperatureC * 9) / 5 + 32) : null;

  const getWeatherIcon = () => {
    if (temperatureC === null) return sunnyIcon;
    if (temperatureC <= 10) return coldIcon;
    if (temperatureC <= 19) return mildIcon;
    return sunnyIcon;
  };

  return (
    <div style={styles.page}>
      <img src={keralaPhoto} alt="Kerala" style={styles.photo} />

      <div style={styles.text}>
        <h2>I live in Kerala, India</h2>
        <p>Kerala is a vibrant state on the southwestern coast of India.</p>
        <p>Known for its backwaters, spices, and rich culture.</p>
      </div>

      <div style={styles.weather}>
        <img src={getWeatherIcon()} alt="Weather Icon" style={styles.icon} />
        <span style={styles.temp}>
          {error
            ? 'Weather unavailable'
            : temperatureC !== null
            ? unit === 'C'
              ? `${temperatureC}°C`
              : `${temperatureF}°F`
            : 'Loading...'}
        </span>
        <span style={styles.toggle}>
          <span
            onClick={() => setUnit('C')}
            style={unit === 'C' ? styles.activeToggle : styles.inactiveToggle}
          >
            Celsius
          </span>
          {' | '}
          <span
            onClick={() => setUnit('F')}
            style={unit === 'F' ? styles.activeToggle : styles.inactiveToggle}
          >
            Fahrenheit
          </span>
        </span>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  photo: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '30px',
  },
  text: {
    textAlign: 'center',
    maxWidth: '600px',
    marginBottom: '20px',
  },
  weather: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '18px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  temp: {
    fontWeight: 'bold',
  },
  toggle: {
    marginLeft: '10px',
    fontSize: '16px',
  },
  activeToggle: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  inactiveToggle: {
    opacity: 0.6,
    cursor: 'pointer',
  },
};

export default MyTown;