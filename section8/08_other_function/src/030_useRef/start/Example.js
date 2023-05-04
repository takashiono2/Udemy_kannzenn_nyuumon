import { useState,useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={()=>inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const[playing,setPlaying] = useState(false);
  const videoRef = useRef();
  return(
    <>
    <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%"}} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={()=>{
        if(playing){
          videoRef.current.pause();
        }else{
          videoRef.current.play();
        }
        setPlaying(prev=>!prev);
      }}>
        {playing ? 'stop' : 'play'}
      </button>
    </>
  );
}
// Case2 = () =>{
//playing,setPlayingを使う
//useRefでvideoRefを定義
// videoタグを使う、ref属性をもつ
// ボタンをクリック、plyaingがtureならpause()、それ以外は.play()
// }


const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
