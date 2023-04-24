import Profile from "./components/Profile";
import {useState} from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterVal, SetFilterVal] = useState("");
  const onChange = (e) => {
    SetFilterVal(e.target.value)
  }

  return (
    <>
      <input type="text"
        value = {filterVal}
        onChange={onChange}
      />
      <ul>
        {persons
        .filter((person)=>
          (person.name.indexOf(filterVal) !== -1)
        )
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
