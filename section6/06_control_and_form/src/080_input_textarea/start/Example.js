import { useState } from "react";
const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => {
    setVal("");
  }

  return (
  <>
    <label htmlFor="456">ラベル</label>
    <>
      <input
        id="123"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />``
      <textarea
        id="456"
        value={val}
        placeholder="こんにちは"
        onChange={(e) => setVal(e.target.value)}
      />
    </>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
  </>
  );
};
export default Example;
