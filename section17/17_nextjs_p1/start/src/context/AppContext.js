import { createContext, useContext, useState } from "react";
//AppContextコンテキストを作成する　ここ

const AppProvider = ({ children }) => {
    const [list, setList] = useState([]);
//リストのstateだけを渡せるようにする　AppContextを使う
    return (

            { children }

    )
}
//valueにグローバルステートを設定、useContextの引数にはcreateしたものが入る
//その関数をuseAppContextとして、AppProviderといっしょにexportする


export { AppProvider, useAppContext }
//contextから状態を受け取る