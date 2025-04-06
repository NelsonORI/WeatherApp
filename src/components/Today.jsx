import React, { useEffect, useState } from "react";
import "./Today.css";

function Today() {
  // State for today's weather and additional data
  const [weatherData, setWeatherData] = useState(null);
  const [weekData, setWeekData] = useState(null);

  useEffect(() => {
    // Fetch today's weather
    fetch("https://weatherapp-be-hn5g.onrender.com/today_weather")
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching today's weather:", error));

    // Fetch weekly data to get today's forecast
    fetch("https://weatherapp-be-hn5g.onrender.com/weather")
      .then((response) => response.json())
      .then((data) => {
        const todayDat = data.find((item) => item.day === "Today");
        setWeekData(todayDat);
      })
      .catch((error) => console.error("Error fetching weekly weather:", error));
  }, []);

  // Show loading screen if data is not yet available
  if (!weatherData || !weekData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="today-container">
      {/* TOP SECTION: Current Weather */}
      <div className="today-top">
        <div className="weather-info">
          <h2 className="temp">{weekData.high_temp}</h2>
          <p className="feels-like">{weekData.low_temp}</p>
        </div>
        <p className="weather-summary">{weekData.condition}</p>
      </div>

      {/* MIDDLE SECTION: Details Grid */}
      <div className="details-grid">
        <div className="detail-card">
          <span className="detail-title">Dew Point</span>
          <span className="detail-value">{weatherData.dew_point}</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Wind</span>
          <span className="detail-value">{weatherData.wind_speed}</span>
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
        <p>{weatherData.moon_phase}</p>
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
