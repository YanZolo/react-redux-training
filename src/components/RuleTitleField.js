import React from "react";

function RuleTitleField(props) {
  return (
    <div className="form-group">
      <label for="rule-title">Title</label>
      <input
        type="text"
        className="form-control"
        id="rule-title"
        placeholder="Title"
        defaultValue={props.title}
      />
    </div>
  );
}

export default RuleTitleField;
