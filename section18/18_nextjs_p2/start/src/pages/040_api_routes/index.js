import axios from "axios";
import Head from "next/head";
import ArticleList from "../../components/articleList";
import { useEffect, useState } from "react";

export default function Page(){
  const[ articles, setArticles ] = useState([]);
  useEffect(()=>{
    const getArticles = async()=>{
      const ENDPOINT = '/api/articles';
      const result = await axios.get(ENDPOINT).then(res => res.data);
      setArticles(result);
      return{
        props: { articles: result }
      }
    }
    getArticles();
  },[]);

  if(!articles){
    return <div>データがありません</div>
  }
    return (
    <>
      <Head>
        <title>ページ一覧</title>
      </Head>
      <h3>フェッチ&SG</h3>
      <ArticleList list={articles}/>
    </>
  )
}