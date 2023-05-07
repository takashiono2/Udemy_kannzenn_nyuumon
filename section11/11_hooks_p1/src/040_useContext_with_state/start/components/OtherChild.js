//useContext, MyContext,clickHandler,value,setValue
import { MyContext } from "../Example";
import { useContext } from "react";

const OtherChild = () => {
  const [,setValue] = useContext(MyContext)
  const clickHandler = (e) =>{
    setValue(prev=> ++ prev);
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
