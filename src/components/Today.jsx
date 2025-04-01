import React from 'react';
import './Today.css';

function Today() {
  return (
    <div className="today-container">
      {/* TOP SECTION: Current Weather */}
      <div className="today-top">
        <div className="weather-info">
          <h2 className="temp">12°</h2>
          <p className="feels-like">Feels Like 35°</p>
          <p className="condition">Mostly Sunny</p>
        </div>
        <p className="weather-summary">
          It will be mostly sunny skies. The high will be 35°.
        </p>
      </div>

      {/* MIDDLE SECTION: Details Grid */}
      <div className="details-grid">
        <div className="detail-card">
          <span className="detail-title">Air Quality</span>
          <span className="detail-value">156</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Wind</span>
          <span className="detail-value">1 mph</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Humidity</span>
          <span className="detail-value">54%</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Pressure</span>
          <span className="detail-value">27.65 in</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">UV Index</span>
          <span className="detail-value">6</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Visibility</span>
          <span className="detail-value">10 mi</span>
        </div>
      </div>

      {/* BOTTOM SECTION: Sun & Moon Summary */}
      <div className="sun-moon-summary">
        <h3>Sun & Moon Summary</h3>
        <div className="sun-moon-details">
          <div className="sun-moon-item">
            <span>Sunrise</span>
            <strong>5:43 AM</strong>
          </div>
          <div className="sun-moon-item">
            <span>Sunset</span>
            <strong>5:49 PM</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
