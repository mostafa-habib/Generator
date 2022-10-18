import React, { useState } from "react";
import Generator from "./Generator";
import DataGridd from "./DataGrid";
import Lang from "./Lang";
import ToolBar from "./ToolBar";

const App = () => {
  const [num, setNum] = useState(1);

  const handleClick = (num) => {
    setNum(num);
  };
  return (
    <>
      <Lang handleClick={handleClick}></Lang>
      <ToolBar num={num}></ToolBar>
      <DataGridd num={num}></DataGridd>
      <Generator num={num}></Generator>
    </>
  );
};

export default App;
