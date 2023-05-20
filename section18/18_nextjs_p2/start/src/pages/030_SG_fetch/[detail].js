import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import Atrticle from "../../components/article";
const ENDPOINT = 'http://localhost:4030/articles';

export default function Detail( { article }) {
  const router = useRouter();
  if(router.isFallback){
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Atrticle data={article} />
    </>
  )
}

export async function getStaticPaths({ params }){
  const result = await axios.get(ENDPOINT).then(res => res.data);
  if(!result) return;
  const paths = result.map((article) => ({
    params: { detail: `${article.id}`}
  }));
  return { paths: paths,fallback: true };
}

export async function getStaticProps({ params }){
  const result = await axios.get(`${ENDPOINT}/${params.detail}`).then(res => res.data);
  return{ props: { article: result } };
}

