import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) =>{
    return setPerson({name: e.target.value, age:person.age});
  }
  const changeAge = (e) => {
    return setPerson({name:person.name ,age: e.target.value});
  }
  const reset = () => {
    return setPerson({name:"",age:""});
  }

  return(
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={reset}>リセット</button>
    </>
  )
};

export default Example;