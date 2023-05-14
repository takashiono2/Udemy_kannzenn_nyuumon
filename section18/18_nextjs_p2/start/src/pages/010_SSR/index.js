import { useEffect,useState } from "react";

export default function SSR({ message }){
  console.log('hello')
  console.log(message)

  useEffect(()=>{
    console.log('useEffect')
    window.localStorage.setItem('key','value')
  },[])

  const [state, setState] = useState('bye');
  const val = 0
  return <h3>{ state }</h3>
}

export async function getServerSideProps(context){
  return{
    props: { message: 'From Server Side Props'}
  }
}