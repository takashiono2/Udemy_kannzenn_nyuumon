import { useRouter } from "next/router";

export default function Setting({ query }){
  const router = useRouter();
    const clickHandler =()=> {
    router.replace('/','/dumy-url');
  }
  return (
    <>
      <h1>routerから取得：{ router.query.name }</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  );
}

export async function getServerSideProps({ query }){
  // console.log(context.query);
  return {
    props: { query }
  }
}

//http://localhost:3000/07_router/hello/setting?key=value&key2=value2

//http://localhost:3000/07_router/a/setting
//http://localhost:3000/07_router/b/setting.js
//http://localhost:3000/07_router/1/setting.js
//http://localhost:3000/07_router/2/setting.js