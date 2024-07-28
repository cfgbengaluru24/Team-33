import axios from "axios";
import { useEffect, useState } from "react";
import "../../Styles/TD.css";
import Sort from "./Sort";
import { DiTravis } from "react-icons/di";
export default function TrainerDisplay() {
  const [displayTrainers, setDTrainers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [markSortedState, setMarkSortedState] = useState(0);
  const [expSortedState, setExpSortedState] = useState(0);
  const [campId, setCampId] = useState(" ");
  const [mode, setMode] = useState(0);
  const [gender, setGender] = useState("2");
  useEffect(() => {
    if (!campId) return;
    axios
      .get(`http://localhost:3003/api/trainer/?mode=${mode}&camp=${campId}`)
      .then((response) => {
        setTrainers(response.data);
        setDTrainers(response.data);
      });
  }, [mode, campId]);
  useEffect(() => {
    console.log(markSortedState);
    let temp = [...trainers];
    let temp1 = [...displayTrainers];
    if (markSortedState == 0) {
      setDTrainers(temp);
      setExpSortedState(0);
      setGender("2");
    } else if (markSortedState == 1) {
      setDTrainers(
        temp1.sort(function (a, b) {
          var lineA = parseInt(a.marks),
            lineB = parseInt(b.marks);
          if (lineA < lineB) return 1;
          return -1;
        })
      );
    } else {
      setDTrainers(
        temp1.sort(function (a, b) {
          var lineA = parseInt(a.marks),
            lineB = parseInt(b.marks);
          if (lineA < lineB) return -1;
          return 1;
        })
      );
    }
  }, [markSortedState]);
  useEffect(() => {
    let temp = [...trainers];
    let temp1 = [...displayTrainers];
    if (expSortedState == 0) {
      setDTrainers(temp);
      setMarkSortedState(0);
      setGender("2");
    } else if (expSortedState == 1) {
      setDTrainers(
        temp1.sort(function (a, b) {
          var lineA = parseInt(a.experience),
            lineB = parseInt(b.experience);
          if (lineA < lineB) return 1;
          return -1;
        })
      );
    } else {
      setDTrainers(
        temp1.sort(function (a, b) {
          var lineA = parseInt(a.experience),
            lineB = parseInt(b.experience);
          if (lineA < lineB) return -1;
          return 1;
        })
      );
    }
  }, [expSortedState]);
  useEffect(() => {
    if (gender == 2) {
      setDTrainers(trainers);
      setMarkSortedState(0);
      setExpSortedState(0);
    } else if (gender == 0) {
      setDTrainers(trainers.filter((trainer) => trainer.gender == 0));
    } else {
      setDTrainers(trainers.filter((trainer) => trainer.gender == 1));
    }
  }, [gender]);
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/api/add-camp").then((response) => {
      setCamps(response.data);
    });
  }, []);
  const handleAssign = (s) => {
    axios.get(
      `http://localhost:3003/api/trainer/assign?assign=${campId}&user=${s}`
    );
    setTrainers(trainers.filter((trainer) => trainer.trainerid != s));
    setDTrainers(displayTrainers.filter((trainer) => trainer.trainerid != s));
  };
  const handleRemove = (s) => {
    axios.get(
      `http://localhost:3003/api/trainer/assign?assign=${campId}&user=${s}&remove=1`
    );
    setTrainers(trainers.filter((trainer) => trainer.trainerid != s));
    setDTrainers(displayTrainers.filter((trainer) => trainer.trainerid != s));
  };
  return (
    <div className="filter-grid">
      <div className="filter-row top">
        <select
          value={campId}
          onChange={(e) => {
            setCampId(e.target.value);
          }}
          className="filter-row-select"
        >
          <option value=" " hidden></option>
          {camps.map((camp) => (
            <option value={camp.id}>{camp.camp_loc}</option>
          ))}
        </select>
        <button
          onClick={() => {
            setMode(0);
          }}
          className={mode == 0 ? "mode-button selected" : "mode-button"}
        >
          Unassigned
        </button>
        <button
          onClick={() => {
            setMode(1);
          }}
          className={mode == 1 ? "mode-button selected" : "mode-button"}
        >
          Assigned
        </button>
        <div>Gender :</div>
        <select
          defaultValue={"2"}
          value={gender}
          className="filter-row-select"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value={"0"}>Male</option>
          <option value={"1"}>Female</option>
          <option value={"2"}>All</option>
        </select>
      </div>
      <br />
      <div className="record-grid">
        <div key={crypto.randomUUID()} className="record-row">
          <div>Trainer Id</div>
          <div>Name</div>
          <div
            onClick={(e) => {
              setMarkSortedState((markSortedState + 1) % 3);
            }}
          >
            Marks
            <Sort state={markSortedState} />
          </div>
          <div
            onClick={(e) => {
              setExpSortedState((expSortedState + 1) % 3);
            }}
          >
            Experience <Sort state={expSortedState} />
          </div>
          <div>Gender</div>
        </div>
        {displayTrainers.map((trainer) => (
          <div key={crypto.randomUUID()} className="record-row">
            <div>{trainer.trainerid}</div>
            <div>{trainer.name}</div>
            <div>{trainer.marks}</div>
            <div>{trainer.experience}</div>
            <div>{trainer.gender == 0 ? "Male" : "Female"}</div>
            {mode == 0 ? (
              <button
                onClick={() => {
                  handleAssign(trainer.trainerid);
                }}
              >
                Assign
              </button>
            ) : (
              <button
                onClick={() => {
                  handleRemove(trainer.trainerid);
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
