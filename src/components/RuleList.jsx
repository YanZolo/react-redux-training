import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRules } from "../actions/rules-actions";
import Rule from "./Rule";

const RuleList = (props) => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRules());
    
  }, []);
  
  const rules = useSelector((state) => state.rules.rules);

  const elements = rules.map((ruleItem) => {
    return <Rule rule={ruleItem} key={ruleItem.id} />;
  });

  return elements;
};

export default RuleList;
