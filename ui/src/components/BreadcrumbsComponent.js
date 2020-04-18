import {Breadcrumb} from "antd";
import React from "react";
import { connect } from "react-redux";

class BreadcrumbsComponent extends React.Component {
  render() {
    const { breadcrumbs } = this.props;
    const breadcrumbsItems = breadcrumbs.map((breadcrumb, index) => {
      console.log('breadcrumb.url: ', breadcrumb.url)
      console.log('breadcrumb.value: ', breadcrumb.value)
      return <Breadcrumb.Item key={index}>
        {(breadcrumbs.length - 1) === index ? <span>{breadcrumb.value}</span> : <a href={breadcrumb.url}>{breadcrumb.value}</a>}
      </Breadcrumb.Item>
    });

    return (
      <Breadcrumb style={{ margin: '16px 0' }} >
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
};
export default connect(mapStateToProps)(BreadcrumbsComponent);