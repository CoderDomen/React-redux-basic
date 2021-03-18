import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";

import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));


// store的第三个API，用于监听store中的状态改变，变化时，重现render页面，达到响应式效果，由于DOM diff算法，无需考虑其他页面状态改变引起的性能问题
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
