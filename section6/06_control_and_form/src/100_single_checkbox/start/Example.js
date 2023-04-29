import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = () =>{
    setIsChecked(prevState =>!prevState
    // setIsChecked((prevState)=>{
    //   let state = !prevState;
    //   return state;
    );
  }
  return(
    <>
      <label htmlFor="my-check">
        チェック：
      <input
        type="checkbox"
        id="my-check"
        onChange={toggleChecked}
        checked={isChecked}
      />
      </label>
      {/* <div>{ isChecked ? "OK!" : "NG!" }</div> */}
      <div style={{ visibility: isChecked ? "visible" : "hidden" }}>OK</div>
    </>
  )
};

export default Example;
