import "./styles.css";
//import MyButton from "./MyButton.js";

import { useState } from "react";

const ButtonText = "Add Student";
const test = false;

export default function App() {
  //console.log("hi to the console");
  // const [count, setCount] = useState(0);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [middle, setMiddle] = useState("");
  const [id, setID] = useState("");
  const [students, setStudents] = useState([]);
  const [check, setCheck] = useState(true);

  const handleButtonClick = () => {
    console.log("Button clicked");
    setStudents([
      ...students,
      { id: id, first: first, middle: middle, last: last, check: check }
    ]);
  };

  const handleChangeFirst = (evt) => {
    //console.log(evt.target.value);
    setFirst(evt.target.value);
  };

  const handleChangeMiddle = (evt) => {
    //console.log(evt.target.value);
    setMiddle(evt.target.value);
  };

  const handleChangeLast = (evt) => {
    //console.log(evt.target.value);
    setLast(evt.target.value);
  };

  const handleChangeID = (evt) => {
    //console.log(evt.target.value);
    setID(evt.target.value);
  };

  const listItems = students.map((student) => (
    <li key={student.id}>
      {`${student.id}: ${student.first}, ${student.middle}, ${student.last}, ${
        check ? "True" : "False"
      }`}
    </li>
  ));
  //console.log(listItems);
  console.log(students);
  return (
    <div className="App">
      <div>Student Information</div>
      <div>
        First: <input type="text" value={first} onChange={handleChangeFirst} />
      </div>
      <div>
        Middle:{" "}
        <input type="text" value={middle} onChange={handleChangeMiddle} />
      </div>
      <div>
        Last: <input type="text" value={last} onChange={handleChangeLast} />
      </div>
      <div>
        ID: <input type="text" value={id} onChange={handleChangeID} />
      </div>
      <div>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
          id="resident"
          name="resident"
        ></input>
        <label htmlFor="resident">Oregon resident</label>
      </div>
      <br />
      <div>
        {/* <button onClick={() => setCount(count+1)}>{ButtonText}</button> */}
        <button onClick={handleButtonClick}>{ButtonText}</button>
      </div>
      <hr />
      {students.length === 0 && <div>Students</div>}
      {students.length > 0 && (
        <div>
          <ul>{listItems}</ul>
        </div>
      )}
      {/* {count} */}
    </div>
  );
}

//
//console.log(listItems);

/*
function MyButton() {
  return (
    <div>
      <button>I'm a button</button>
    </div>
  );
}
*/
