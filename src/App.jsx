import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";
import reducer, { initialState } from "./store/reducers.jsx";
import {
  addMemory,
  applyNumber,
  clearMemory,
  operatorChange,
  recallMemory,
  resetTotal,
  typeNumber,
} from "./store/actions.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTypeNumber = (event) => {
    dispatch(typeNumber(event.target.value));
  };

  const handleResetTotal = () => {
    dispatch(resetTotal());
  };

  const handleOperatorChange = (event) => {
    dispatch(operatorChange(event.target.value));
  };

  const handleAddMemory = () => {
    dispatch(addMemory());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  const handleRecallMemory = () => {
    dispatch(recallMemory());
  };

  const handleApplyNumber = () => {
    dispatch(applyNumber());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory} />
              <CalcButton value={"MR"} onClick={handleRecallMemory} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleTypeNumber} />
              <CalcButton value={2} onClick={handleTypeNumber} />
              <CalcButton value={3} onClick={handleTypeNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleTypeNumber} />
              <CalcButton value={5} onClick={handleTypeNumber} />
              <CalcButton value={6} onClick={handleTypeNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleTypeNumber} />
              <CalcButton value={8} onClick={handleTypeNumber} />
              <CalcButton value={9} onClick={handleTypeNumber} />
            </div>
            <div className="row">
              <CalcButton value={"+"} onClick={handleOperatorChange} />
              <CalcButton value={0} onClick={handleTypeNumber} />
              <CalcButton value={"-"} onClick={handleOperatorChange} />
            </div>
            <div className="row">
              <CalcButton value={"*"} onClick={handleOperatorChange} />
              <CalcButton value={"/"} onClick={handleOperatorChange} />
              <CalcButton value={"CE"} onClick={handleResetTotal} />
            </div>

            <div className="row eq_button">
              <CalcButton value={"="} onClick={handleApplyNumber} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
