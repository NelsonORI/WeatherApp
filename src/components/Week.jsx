import React, { useEffect, useState } from "react";
import "./Week.css";

function Week() {
  const [weeksData, setWeeksData] = useState(null);

  useEffect(() => {
    fetch("https://weatherapp-be-hn5g.onrender.com/weather")
      .then((response) => response.json())
      .then((data) => setWeeksData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div className="week-container">
      <h3 className="week-title">7-Day Forecast</h3>
      <div className="week-grid">
        {weeksData ? (
          weeksData.map((day, index) => (
            <div key={index} className="week-card">
              <span className="day-name">{day.day}</span>
              <span className="day-temp">
                {day.high_temp} / {day.low_temp}
              </span>
              <span className="day-condition">{day.condition}</span>
              <span className="rain-chance">{day.rain_percentage}</span>
            </div>
          ))
        ) : (
          <p>Loading forecast...</p>
        )}
      </div>
    </div>
  );
}

export default Week;
