import React from "react";

function RuleDescriptionField(props) {
  return (
    <div className="form-group">
      <label for="rule-desc">Description</label>
      <textarea
        className="form-control"
        id="rule-desc"
        placeholder="Description"
        defaultValue={props.description}
      />
    </div>
  );
}

export default RuleDescriptionField;
