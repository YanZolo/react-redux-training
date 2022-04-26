import { RULES_LOADED } from "../actions/rules-actions";
import { DO_DISLIKE, DO_LIKE } from "../actions/likes-actions";

const initialState = { rules: [] };

export default function ruleApp(state = initialState, action) {
  switch (action.type) {
    case RULES_LOADED:
      return {
        ...state,
        rules: action.rules,
      };
    case DO_DISLIKE:
      state.rules.map((rule) => {
        if (rule.id !== action.id) {
          return rule;
        }
        return { ...rule, dislikes: rule.dislikes + 1 };
      });
    case DO_LIKE:
      state.rules.map((rule) => {
        if (rule.id !== action.id) {
          return rule;
        }
        return { ...rule, likes: rule.likes + 1 };
      });
    default:
      return state;
  }
}
