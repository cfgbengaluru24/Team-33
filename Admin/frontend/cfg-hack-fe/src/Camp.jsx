import axios from "axios";
import { useEffect, useState } from "react";
import { DiTravis } from "react-icons/di";
export default function TrainerDisplay() {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3003/api/add-camp/`).then((response) => {
      setCamps(response.data);
    });
  }, []);
  const formatDate = (s) => {
    const date = new Date(s);
    return date.toString().slice(0, 16);
  };
  return (
    <div>
      <div className="record-grid">
        {camps.map((camp) => (
          <div key={crypto.randomUUID()} className="record-row">
            <div>{camp.camp_loc}</div>
            <div>{formatDate(camp.camp_date)}</div>
            <button
              onClick={() => {
                const data = {
                  trainerid: user.trainerid,
                  assigned: camp.id,
                };
                axios
                  .post(`http://localhost:3003/api/trainer/join`, data)
                  .then((response) => {
                    setCamps(camps.filter((camp1) => camp1.id != camp.id));
                  });
              }}
            >
              Request to Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
