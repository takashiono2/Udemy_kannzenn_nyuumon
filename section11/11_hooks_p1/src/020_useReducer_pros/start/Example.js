//useReducer,reducer,prev,state,setState,useState,{ type, step },countUp,rcountUp,rcountDown,throw new Error('不明なactionです。')
import { useState,useReducer } from "react";

const Example = () => {
  const [ state,setState ] = useState(0);
  const [ rstate,dispatch ] = useReducer((prev,{ type, step })=>{
    switch(type){
      case '+' :
        return prev + step;
      case '-' :
        return prev - step;
      default :
        throw new Error('不明なactionです。');

    }
    // if(action === "+"){
    //   return ++prev;
    // }else if(action === "-"){
    //   return --prev;
    // }
  },0);

  const countUp = () =>{
    setState(prev => ++prev);
  }
  const rcountUp = () =>{
    dispatch({type: '+',step: 2});
  }
  const rcountDown = () =>{
    dispatch({type: '-',step: 3});
  }

  return(
    <>
      <h3>{state}</h3>
      <div>
        <button onClick={countUp}>+</button>
      </div>
      <div>
      <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );

}

export default Example;
