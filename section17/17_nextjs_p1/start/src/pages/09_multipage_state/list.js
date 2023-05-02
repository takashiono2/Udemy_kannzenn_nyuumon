import List from "../../components/list";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
export default function PageList() {
  const [list] = useAppContext();//グローバルな状態でstateが管理される
  const router = useRouter();

  return (
    <>
      <List list={list} />
      <button onClick={() => router.back()}>前のページへ</button>
    </>
  );
}
