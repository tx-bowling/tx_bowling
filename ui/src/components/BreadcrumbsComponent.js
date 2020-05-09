import {Breadcrumb} from "antd";
import React from "react";
import { connect } from "react-redux";

class BreadcrumbsComponent extends React.Component {
  render() {
    const { breadcrumbs } = this.props;
    const breadcrumbItems = breadcrumbs.map((breadcrumb, index) => {
      return (
        <Breadcrumb.Item key={index} href={breadcrumb.url} active={breadcrumb.active}>
          {breadcrumb.value}
        </Breadcrumb.Item>
      )
    });

    return (
      <div>
        {breadcrumbItems.length === 0 && <span style={{padding: '1px 9px 1px 9px'}} />}
        {breadcrumbItems.length > 0 &&
          <Breadcrumb>
            {breadcrumbItems}
          </Breadcrumb>
        }
      </div>
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
