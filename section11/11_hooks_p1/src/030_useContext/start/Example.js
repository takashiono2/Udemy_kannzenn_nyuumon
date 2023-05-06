//createContext, Mycontext,const value = 'hello'
import Child from "./components/Child";
import { createContext } from "react";
export const Mycontext = createContext('hello');

const Example = () => {
  const value = 'hello'
  return (
    <Mycontext.Provider value={value}>
      <Child/>;
    </Mycontext.Provider>
  )
};

export default Example;
