import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [list, setList] = useState([]);

    return (
        <AppContext.Provider value={[list, setList]}>
            { children }
        </AppContext.Provider>
    )
}
//valueにグローバルステートを設定、useContextの引数にはcreateしたものが入る
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext }