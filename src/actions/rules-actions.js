// import rules from "../data.json"

export const RULES_LOADED = "RULES_LOADED";

function loadRules(rules) {
  //  console.log(' rules-actions loadRules rules ===> :', rules)
  return {
    type: RULES_LOADED,
    rules,
  };
}

export function fetchRules() {
  return function (dispatch) {
    fetch("/rest/rules").then(async function(res) {
      console.log(' rules-actions fetch res ==> :', res)
      const rules = await res.json()
      dispatch(loadRules(rules));
    });
  };
}
