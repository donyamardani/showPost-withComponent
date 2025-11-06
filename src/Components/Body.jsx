import React, { useEffect, useState } from "react";
import Comments from "./Comments";
export default function Body({Post}) {
const [comments,setComments]=useState()
useEffect(()=>{
  (async()=>{
    try {
      const res=await fetch(`http://localhost:3001/comments?PostId=${Post.id}`)
      const data=await res.json()
      setComments(data)
    } catch (error) {
      console.log(error)
    }
  })()
},[Post])
  return (
    <div className="container">
      <div className="post">
        <img src={`assets/${Post?.image}`} alt="" />
        <h1>{Post?.title}</h1>
        <div>
          {Post?.body}
        </div>
      </div>
      {comments && <Comment comments={comments}/>}
    </div>
  );
}
