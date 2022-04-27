import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rule from "./Rule";
import { fetchRules } from "../actions/rules-actions";

const RuleList = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRules());
    
  }, []);
  
  const rules = useSelector((state) => state.rules.rules);
  console.log('rules RuleList', rules)

  const elements = rules.map((ruleItem) => {
    return <Rule rule={ruleItem} key={ruleItem.id} />;
  });

  return elements;
};

export default RuleList;
