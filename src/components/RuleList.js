import React from "react";
import Rule from "./Rule";


const RuleList = (props)  => {


    const elements = props.rules.map((ruleItem) => {
      return (
        <Rule rule={ruleItem} key={ruleItem.id} />
      );
    });

    return elements;
  
}

export default RuleList