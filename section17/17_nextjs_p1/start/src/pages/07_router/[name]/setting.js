import { useRouter } from "next/router";

export default function Setting({ query }){
  const router = useRouter();
  const clickHandler = () =>{
    router.push('/','/dummy-url');
  }
  return(
    <>
      <h1>routerから取得：{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}

//http://localhost:3000/07_router/hello/setting
export async function getServerSideProps({query}){
  return{
    props: { query }
  }
}

// export default function Setting(){
//   return <h1>[name]/setting.js</h1>
// }

// export default function Setting({query}){
//   return <h1>{query.name}</h1>
// }

// export async function getServerSideProps({query}){
//   return{
//     props: { query }
//   }
// }

// export default function Setting({hello}){
//   return <h1>{hello}</h1>
// }

// export async function getServerSideProps(context){
//   console.log(context.query);
//   return{
//     props: { hello: 'こんにちは' }
//   }
// }

// import { useRouter } from "next/router";

// export default function Setting({ query }){
//   const router = useRouter();
//     const clickHandler =()=> {
//     router.replace('/','/dumy-url');
//   }
//   return (
//     <>
//       <h1>routerから取得：{ router.query.name }</h1>
//       <button onClick={clickHandler}>アクションによる画面遷移</button>
//     </>
//   );
// }

// export async function getServerSideProps({ query }){
//   // console.log(context.query);
//   return {
//     props: { query }
//   }
// }

//http://localhost:3000/07_router/hello/setting?key=value&key2=value2

//http://localhost:3000/07_router/a/setting
//http://localhost:3000/07_router/b/setting.js
//http://localhost:3000/07_router/1/setting.js
//http://localhost:3000/07_router/2/setting.js