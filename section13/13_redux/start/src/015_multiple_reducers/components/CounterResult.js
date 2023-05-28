import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux"
const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector(state => state);
  console.log(state);
  return <h3>counter:{state.counter},counter2:{state.counter2}</h3>;
};

export default CounterResult;