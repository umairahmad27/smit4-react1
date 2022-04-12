import React, { useState, useEffect } from "react"
// import { uuid } from 'uuidv4';
import './App.scss';

function App() {


  const [students] = useState([
    { firstName: "Hamza", lastName: "Kamal", age: 10, id: "1" },
    { firstName: "Ahmad", lastName: "Munir", age: 20, id: "2" },
    { firstName: "Zubair", lastName: "Ahmad", age: 30, id: "3" },
    { firstName: "Hamza", lastName: "Kamal", age: 10, id: "4" },
  ]);


  // const addStudent = () => {
  //   setStudents(["abc"])
  // }

  useEffect(() => {
    // console.log(uuid())
    students.map((item) => {
      // console.log("firstName of each element => ", item.age)
      // item.map((i, index) => {
      //   console.log(i)
      // })
    })
  }, [students])

  // const showConsoleLog = () => {
  //   console.log(students)
  // }
  return (
    <div>
      <h1>Students</h1>
      <h2>List</h2>
      <ol>
        {students.map((item) => {
          return <li key={item.id}><b>First Name:</b> {item.firstName} | <b>Last Name:</b> {item.lastName} | <b>Age:</b> {item.age}</li>
        })}
      </ol>
      {/* <button onClick={addStudent}>Add Student</button> */}
      {/* <button onClick={showConsoleLog}>Console kro</button> */}
    </div>
  );
}

export default App;
