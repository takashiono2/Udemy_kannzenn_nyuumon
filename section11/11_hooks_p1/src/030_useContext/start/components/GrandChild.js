//useContext ,Mycontext ,value
import { useContext } from "react";
import { Mycontext } from "../Example";

const GrandChild = () => {

const value = useContext(Mycontext);
  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;
