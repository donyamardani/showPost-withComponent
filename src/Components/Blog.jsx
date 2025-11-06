import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Body from "./Body";

export default function Blog() {
  const [Posts,setPosts]=useState(null);
  const [CurentIndex,setCurentIndex]=useState();
  const handleCurentIndex=(index)=>{
       setCurentIndex(index)
  }
  return (
    <>
    {Posts?(
    <>
    <Aside Posts={Posts} handleCurentIndex={handleCurentIndex}/>
    <Body Post={Posts[CurentIndex]}/>
    </>):(<h1>loding...</h1>)
  }
    </>
  );
}
