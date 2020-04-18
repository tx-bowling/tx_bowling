import {Spin} from "antd";
import React from "react";

class LoadingComponent extends React.Component {
  render() {
    return (
      <Spin size="large" tip="Loading..." style={{'display': 'inline-block', 'padding-top': '50px'}}/>
    )
  }
}

export default LoadingComponent;