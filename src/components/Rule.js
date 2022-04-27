import React, { useState } from "react";
import LikeBtn from "./LikeBtn";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { fetchDislikes, fetchLikes } from "../actions/likes-actions";
import { Link } from "react-router-dom";

const Rule = (props) => {
  const [folded, setFolded] = useState(false);
 

  const dispatch = useDispatch();

  const { rule } = props;
  console.log("folded", folded);

  const handleDispatchLike = () => {
    dispatch(fetchLikes(rule.id));
  };
  const handleDispatchDislike = () => {
    dispatch(fetchDislikes(rule.id));
  };

  return (
    <div className="panel panel-primary">
      <div
        className="panel-heading"
        role="presentation"
        onClick={() => setFolded(!folded)}
      >
        {rule.title}
        <i
          className={classNames({
            "pull-right glyphicon glyphicon-chevron-down": !folded,
            "pull-right glyphicon glyphicon-chevron-up": folded,
          })}
        ></i>
      </div>

      {rule.description && (
        <div
          role="description"
          className={!folded ? "panel-body " : "panel-body hidden"}
        >
          <p>{rule.description}</p>
        </div>
      )}
      <div className="panel-footer">
        <div className="btn-toolbar">
          <span className="badge">craftsmanship</span>
          <span className="badge">clean code</span>
          <div className="btn-group btn-group-xs pull-right">
            <Link className="btn btn-primary" title="Update" to={`/edit/${rule.id}`} >
              <i className="glyphicon glyphicon-pencil"></i>
            </Link>
          </div>
          <LikeBtn
            onClick={handleDispatchLike}
            ruleId={rule.id}
            counter={rule.likes}
            isLike={true}
          />
          <LikeBtn
            onClick={handleDispatchDislike}
            ruleId={rule.id}
            counter={rule.dislikes}
            isLike={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Rule;
