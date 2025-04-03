import React from 'react';
import './Today.css';
import { useEffect, useState } from 'react';

function Today() {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);
  const[weekData, setWeekData] = useState(null);

  //Fetch weather data from server
  useEffect(() => {
    fetch('http://127.0.0.1:5000/today_weather')
     .then(response => response.json())
     .then(data => setWeatherData(data))
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/weather')
     .then(response => response.json())
     .then(data => {
      const todayDat =  data.find(item => item.day === "Today");
      setWeekData(todayDat);
     })
  }, []);

  if(!weatherData){
    return <div>Loading...</div>
  }

  

  return (
    <div className="today-container">
      {/* TOP SECTION: Current Weather */}
      <div className="today-top">
        <div className="weather-info">
          <h2 className="temp">{weekData.high_temp}</h2>
          <p className="feels-like">{weekData.low_temp}</p>
        </div>
        <p className="weather-summary">
          {weekData.condition}
        </p>
      </div>

      {/* MIDDLE SECTION: Details Grid */}
      <div className="details-grid">
        <div className="detail-card">
          <span className="detail-title">Dew Point</span>
          <span className="detail-value">{weatherData.dew_point}</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Wind</span>
          <span className="detail-value">{weatherData.humidity}</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Humidity</span>
          <span className="detail-value">{weatherData.humidity}</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Pressure</span>
          <span className="detail-value">{weatherData.pressure}</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">UV Index</span>
          <span className="detail-value">{weatherData.uv_index}</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Visibility</span>
          <span className="detail-value">{weatherData.visibility}</span>
        </div>
      </div>

      {/* BOTTOM SECTION: Sun & Moon Summary */}
      <div className="sun-moon-summary">
        <h3>Sun & Moon Summary</h3>
        <div className="sun-moon-details">
          <div className="sun-moon-item">
            <span>Sunrise</span>
            <strong>{weatherData.sunrise}</strong>
          </div>
          <div className="sun-moon-item">
            <span>Sunset</span>
            <strong>{weatherData.sunset}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
