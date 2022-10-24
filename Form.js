import React, { useState } from "react";
import "./Form.css";

const year = new Date().getFullYear();
const yearList = Array.from(new Array(21), (val, index) => year - index);
const educationList = [
  {
    name: "P.HD",
    value: "phd",
  },
  {
    name: "MASTERS",
    value: "masters",
  },
  {
    name: "BACHELOR's",
    value: "bachelors",
  },
];

const MyForm = () => {
  const [userForm, setUserForm] = useState({
    userName: "",
    userEducation: "",
    userPassedOutYear: year,
  });

  const formName = "Student Form";

  function onUserNameChange(event) {
    setUserForm({ ...userForm, userName: event.target.value });
  }

  function onEducationChange(event) {
    setUserForm({ ...userForm, userEducation: event.target.value });
  }

  function onYearChange(event) {
    setUserForm({ ...userForm, userPassedOutYear: event.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(userForm);
    alert(userForm.userName);
  };
  const { userName, userEducation, userPassedOutYear } = userForm;

  return (
    <div className="form-center">
      <h1 className="form-heading">{formName}</h1>
      <form onSubmit={submitForm}>
        <label type="username"> Name Of Candidate:</label>
        <input
          type="text"
          value={userName}
          onChange={onUserNameChange}
          required
        />
        <div onChange={onEducationChange} class="radio-grp">
          <label>Education: </label>
          {educationList.map(({ value, name }, index) => {
            return (
              <>
                <input
                  type="radio"
                  value={value}
                  name="education"
                  checked={userEducation === value}
                  required
                  key={index}
                />
                {name}
              </>
            );
          })}
        </div>
        <div>
          <label>Pass Out Year:</label>
          <select onChange={onYearChange} value={userPassedOutYear}>
            {yearList.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
