import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  TYPE_NUMBER,
  RESET_TOTAL,
  OPERATOR_CHANGE,
  ADD_MEMORY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
} from "../store/actions.jsx";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  temp: null,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(
          Number(state.temp),
          Number(state.total),
          state.operation
        ),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case TYPE_NUMBER:
      return {
        ...state,
        total: (state.total == "0" ? "" : state.total) + action.payload,
      };

    case RESET_TOTAL:
      return {
        ...state,
        total: 0,
      };

    case OPERATOR_CHANGE:
      return {
        ...state,
        temp: state.total,
        total: 0,
        operation: action.payload,
      };

    case ADD_MEMORY:
      return {
        ...state,
        memory: state.total,
        total: 0,
      };

    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };

    case RECALL_MEMORY:
      return {
        ...state,
        total: state.memory,
        memory: 0,
      };
    default:
      return state;
  }
};

export default reducer;
