import React, { useState } from "react";
export default function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        // onClick={() => { count++; console.log(count); }}
        // id="wd-counter-up-click">
        onClick={() => { setCount(count + 1); }}
        className="btn bg-success text-white"
        id="wd-counter-up-click">
        Up
      </button>
      <button
        onClick={() => { setCount(count - 1); }}
        className={"btn bg-danger text-white m-2"}
        id="wd-counter-down-click">
        Down
      </button>
      <hr />
    </div>
  );
}
