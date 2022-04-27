import React from "react";
import RuleDescriptionField from "./RuleDescriptionField";
import RuleTitleField from "./RuleTitleField";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function RuleForm() {
    const params = useParams()
    const ruleId = parseInt(params.id)
    const rule = useSelector(state => state.rules.rules.find(rule => rule.id === ruleId)) || []
    console.log('RuleForm.js ruleId from params ==> : ', ruleId)
    console.log('RuleForm.js rule from strore ===> : ', rule)

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">New rule</h3>
      </div>
      <div className="panel-body">
        <form>
          <RuleTitleField title={rule.title} />
          <RuleDescriptionField description={rule.description} />
          <button type="submit" className="btn btn-primary pull-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RuleForm;
