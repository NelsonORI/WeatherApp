import React from "react";
import "./Week.css";

function Week() {
  // Sample weekly data (you can replace with API data)
  const weeklyForecast = [
    { day: "Mon", temp: "32°", condition: "Sunny" },
    { day: "Tue", temp: "30°", condition: "Cloudy" },
    { day: "Wed", temp: "28°", condition: "Rainy" },
    { day: "Thu", temp: "29°", condition: "Partly Cloudy" },
    { day: "Fri", temp: "31°", condition: "Sunny" },
    { day: "Sat", temp: "33°", condition: "Sunny" },
    { day: "Sun", temp: "27°", condition: "Stormy" },
  ];

  return (
    <div className="week-container">
      <h3 className="week-title">7-Day Forecast</h3>
      <div className="week-grid">
        {weeklyForecast.map((day, index) => (
          <div key={index} className="week-card">
            <span className="day-name">{day.day}</span>
            <span className="day-temp">{day.temp}</span>
            <span className="day-condition">{day.condition}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Week;
