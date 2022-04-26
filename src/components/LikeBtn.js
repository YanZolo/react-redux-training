import React, { useState } from "react";

 const LikeBtn = (props) => {
  const [counter, setCounter] = useState(props.counter);

  const handleLikes = () => {
    setCounter(counter + 1);
  };

  const className = !props.isLike
    ? "glyphicon glyphicon-thumbs-up"
    : "glyphicon glyphicon-thumbs-down";
  const title = props.isLike ? "+1" : "-1";

  return (
    <div className="btn-group btn-group-xs pull-right">
      <a className="btn btn-default" title={title} onClick={handleLikes}>
        {counter} <i className={className}></i>
      </a>
    </div>
  );
};

export default LikeBtn