// POINT 複数ページでの状態の共有（Context使用）
//Listを使う、routerを使う
import { useState } from "react";
import Form from "../../components/form";
import List from "../../components/list";
//追記
//追記
import Link from "next/link";

export default function PageLink() {
  const initialState = { name: "", birth: "" };
  const [value, setValue] = useState(initialState);
  const [ list, setList ] = useAppContext();
//追記

  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({ ...prev, [inputId]: inputValue }));
  };
  const handleAddClick = () => {
    setList((prev) => [...prev, { ...value, id: new Date().getTime() }]);
    setValue(initialState);
  };
  const handleResetClick = () => {
    setList([]);
  };
  //onClick関数でクリックしたら'/09_multipage_state/list'へ「リストページへ」を追記
  return (
    <div>
      <Form
        handleAddClick={handleAddClick}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        nameValue={value.name}
        birthValue={value.birth}
      />




      <a >
        アンカータグ
      </a>
      </Link>
    </div>
  );
}
