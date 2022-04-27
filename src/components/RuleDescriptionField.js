import React from "react";

function RuleDescriptionField(props) {
  const {description} = props
  return (
    <div className="form-group">
      <label htmlFor="rule-desc">Description</label>
      <textarea
        className="form-control"
        id="rule-desc"
        placeholder="Description"
        defaultValue={description ? description : ""}
      />
    </div>
  );
}

export default RuleDescriptionField;
