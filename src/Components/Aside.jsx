import React from "react";

export default function Aside({Posts,handleCurentIndex}) {
  const items=Posts?.map((e,index)=>
    <li key={index} onClick={()=>handleCurentIndex(index)} >{e?.id}:{e?.title}</li>
  );
  return (
    <aside>
      <ul>{items}</ul>
    </aside>
  );
}
