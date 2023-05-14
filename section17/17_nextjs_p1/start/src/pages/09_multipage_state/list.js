import List from "../../components/list"
import { useAppContext } from "../../context/AppContext"
//importする
export default function PageList() {
  const [list,] = useAppContext();
//グローバルな状態でstateが管理される　ここ
//routerを使いたい　ここ
//前のページへボタンをonClickしたら遷移する、Listを使う
  return (
    <List list={list}/>
  );
}
