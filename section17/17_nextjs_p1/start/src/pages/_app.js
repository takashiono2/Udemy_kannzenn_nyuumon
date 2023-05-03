import '../styles/globals.css'
//next.jsは実装ではじめに通るところなので、AppProviderを取り込む
//ここ
//AppProviderでラップしてあげる事で、全ページに渡せるようになる
function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  );
}
export default MyApp;
