import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = (e) => {
    setIsChecked(preState => !preState);
    // setIsChecked((preState)=>{
    // let state = !preState;
    // state;
  };

  return(
    <>
      <label htmlFor="my-check">
        チェック：
      <input type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={toggleChecked}
      />
      </label>
      <div>
        { isChecked? "ON!" : "OFF!" }
      </div>
    </>
  )
};

export default Example;
