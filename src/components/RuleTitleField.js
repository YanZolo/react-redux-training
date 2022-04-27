import React from "react";

function RuleTitleField(props) {
  const {title} = props
  return (
    <div className="form-group">
      <label htmlFor="rule-title">Title</label>
      <input
        type="text"
        className="form-control"
        id="rule-title"
        placeholder="Title"
        defaultValue={title ? title: ""}
      />
    </div>
  );
}

export default RuleTitleField;
