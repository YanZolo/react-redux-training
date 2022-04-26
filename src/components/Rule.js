import React, { useState } from "react";
import LikeBtn from "./LikeBtn";
import classNames from "classnames";
import { doDislike, doLike } from "../actions/likes-actions";
import { useDispatch } from "react-redux";

const Rule = (props) => {
  const [folded, setFolded] = useState(false);

  const dispatch = useDispatch();

  const { rule } = props;
  console.log("folded", folded);

  const handleDispatchLike = () => {
    dispatch(doLike(rule.id));
  };
  const handleDispatchDislike = () => {
    dispatch(doDislike(rule.id));
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
            <a className="btn btn-primary" title="Update">
              <i className="glyphicon glyphicon-pencil"></i>
            </a>
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
