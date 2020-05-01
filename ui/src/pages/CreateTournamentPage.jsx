import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';

import TournamentFormComponent from './../components/tournaments/TournamentFormComponent';
import {setBreadcrumbs} from "../actions/breadcrumbs";

const { Title } = Typography;

class CreateTournamentPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    const breadcrumbs = [
      {value: 'Home', url: '/', active: false},
      {value: 'Tournaments', url: '/tournaments', active: false},
      {value: 'Create', url: null, active: true},
    ];
    dispatch(setBreadcrumbs(breadcrumbs))
  }

  render() {
    return (
      <div>
        <Title>Create Tournament</Title>
        <TournamentFormComponent />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CreateTournamentPage);