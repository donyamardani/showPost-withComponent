import React from "react";

export default function Body({Post}) {
  return (
    <div className="container">
      <div className="post">
        <img src={`assets/${Post?.image}`} alt="" />
        <h1>{Post?.title}</h1>
        <div>
          {Post?.body}
        </div>
      </div>
      <div className="comments">
        <p>Comments:</p>
        <div className="comment">
          <p>Comment 1</p>
        </div>
        <div className="comment">
          <p>Comment 2</p>
        </div>
        <div className="comment">
          <p>Comment 3</p>
        </div>
      </div>
    </div>
  );
}
