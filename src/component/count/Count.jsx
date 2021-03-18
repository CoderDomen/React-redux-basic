import React, { Component } from "react";
import store from "../../redux/store";
import {addAction,delAction,addAsyncAction} from '../../redux/count_action'
class Count extends Component {
  // 加
  add = () => {
    const { value } = this.val;
    // store 的第二个API，用于发送action对象，请求reducer操作计算
    store.dispatch(addAction(value*1));
  };

  // 减
  del = () => {
    const { value } = this.val;
    store.dispatch(delAction(value*1));
  };

  // 奇数加
  addIfodd = () => {
    const { value } = this.val;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(addAction(value*1));
    }
  };

  // 异步加
  addAsync = () => {
    const { value } = this.val;
    store.dispatch(addAsyncAction(value*1,500));

    // setTimeout(() => {
    //   store.dispatch(addAction(value*1));
    // }, 500);
  };

  render() {
    return (
      <div>
        {/* store的第一个API，获取其中的状态 */}
        <h4>当前求和为：{store.getState()}</h4>
        <select ref={c => (this.val = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>加</button>
        <button onClick={this.del}>减</button>
        <button onClick={this.addIfodd}>奇数加</button>
        <button onClick={this.addAsync}>异步加</button>
      </div>
    );
  }
}

export default Count;
