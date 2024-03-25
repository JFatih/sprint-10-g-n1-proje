export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const TYPE_NUMBER = "TYPE_NUMBER";
export const RESET_TOTAL = "RESET_TOTAL";
export const OPERATOR_CHANGE = "OPERATOR_CHANGE";
export const ADD_MEMORY = "ADD_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const typeNumber = (event) => {
  return { type: TYPE_NUMBER, payload: event.toString() };
};

export const resetTotal = () => {
  return { type: RESET_TOTAL };
};

export const operatorChange = (event) => {
  return { type: OPERATOR_CHANGE, payload: event };
};

export const addMemory = () => {
  return { type: ADD_MEMORY };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};

export const recallMemory = () => {
  return { type: RECALL_MEMORY };
};
