import {Breadcrumb} from "antd";
import React from "react";
import { connect } from "react-redux";

class BreadcrumbsComponent extends React.Component {
  render() {
    const { breadcrumbs } = this.props;
    const breadcrumbsItems = breadcrumbs.map((breadcrumb, index) => {
      return (
        <Breadcrumb.Item key={index} href={breadcrumb.url} active={breadcrumb.active}>
          {breadcrumb.value}
        </Breadcrumb.Item>
      )
    });

    return (
      <Breadcrumb>
        {breadcrumbsItems}
      </Breadcrumb>
    )
  }
}

function mapStateToProps(state) {
  const {breadcrumbs} = state;

  return {
    breadcrumbs: breadcrumbs.breadcrumbs || []
  }
}

export default connect(mapStateToProps)(BreadcrumbsComponent);
