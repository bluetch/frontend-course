import { useState } from "react";
import { itinerary } from "../constants";

export const Test = () => {
  const [currentDay, setCurrentDay] = useState(1);
  console.log(itinerary);

  const handleDayChange = (day) => {
    setCurrentDay(day);
    console.log("day", day);
  }
  return (
    <div>
      <h1>Test</h1>
      <button onClick={() => handleDayChange(1)}>Day 1</button>
      <button onClick={() => handleDayChange(2)}>Day 2</button>
      <button onClick={() => handleDayChange(3)}>Day 3</button>
      <div>
        <h3>{currentDay.day}</h3>
        <div>
          {itinerary[currentDay].map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.time}</p>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}