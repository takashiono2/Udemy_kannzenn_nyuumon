import { useState } from "react";

// POINT プルダウンの実装
const Example = () => {
  const [selected, setSelected] = useState("Banana");
  const OPTIONS = ["Apple", "Banana", "Cherry"];
  return (
    <>
    <select
      value={selected}
      onChange={(e)=>setSelected(e.target.value)}
    >
      {OPTIONS.map((fruit)=>{
        return(
          <>
            <option key={fruit} value={fruit}>{fruit}</option>
          </>
        );
      })
      }
    </select>
    <div>選択された果物: {selected}</div>
    </>
  );
};

export default Example;
