//AppContext,useAppContext,AppProvider
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [list, setList] = useState([]);
//リストのstateだけを渡せるようにする　AppContextを使う
    return (
        <AppContext.Provider value={[list, setList]}>
            { children }
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
//valueにグローバルステートを設定、useContextの引数にはcreateしたものが入る
//その関数をuseAppContextとして、AppProviderといっしょにexportする


export { AppProvider, useAppContext }
//contextから状態を受け取る