import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DiTravis } from "react-icons/di";
import "./Camp.css";
import { UserContext } from "./Content";
export default function TrainerDisplay() {
  const user = useContext(UserContext);
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/add-camp/?tid=${user.trainerid}`)
      .then((response) => {
        console.log(response.data);
        setCamps(response.data);
      });
  }, []);
  const formatDate = (s) => {
    const date = new Date(s);
    return date.toString().slice(0, 16);
  };
  return (
    <div>
      <div style={{ color: "grey", paddingLeft: "1em", paddingTop: "1em" }}>
        {" "}
        Campsites{" "}
      </div>
      <div className="record-grid">
        {camps.map((camp) => (
          <div key={crypto.randomUUID()} className="record-row1">
            <div>{camp.camp_loc}</div>
            <div>{formatDate(camp.camp_date)}</div>
            <button
              className="record-button"
              onClick={() => {
                console.log(camp.id);
                const data = {
                  trainerid: user.trainerid,
                  assigned: camp.id,
                };
                setCamps(camps.filter((camp1) => camp1.id != camp.id));
                axios
                  .post(`http://localhost:3003/api/trainer/join`, data)
                  .then((response) => {});
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
