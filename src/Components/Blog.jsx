import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Body from "./Body";

export default function Blog() {
  const [Posts,setPosts]=useState(null);
  const [CurentIndex,setCurentIndex]=useState(0);
  const handleCurentIndex=(index)=>{
       setCurentIndex(index);
  };
  useEffect(()=>{
    (async()=>{
      try {
        const res=await fetch('http://localhost:3001/posts')
        const data=await res.json()
        setPosts(data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[]);
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
