import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  const onChange = (e) => {setFilterVal(e.target.value)}
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={onChange}/>
      <ul>
        {animals
          .filter((animal) =>
            animal.indexOf(filterVal) !== -1
          )
          .map((animal) => (
          <li kye={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
