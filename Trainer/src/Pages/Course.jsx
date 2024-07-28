import { useState, useEffect } from "react";
import axios from "axios";
export default function Course() {
  const [cardsData, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/api/add-course").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="record-row2">
          <div>{card.course_title}</div>
          <div>{card.course_description}</div>
          <div>{card.link}</div>
        </div>
      ))}
    </div>
  );
}
