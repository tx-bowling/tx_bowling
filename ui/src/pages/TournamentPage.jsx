import React from 'react'
import { connect } from 'react-redux'

import TournamentDisplayComponent from './../components/tournaments/TournamentDisplayComponent';
import {getTournament, getTournamentLocation, getTournamentSchedules} from "../actions/tournament";
import {setBreadcrumbs} from "../actions/breadcrumbs";

class TournamentPage extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id;
    dispatch(getTournament(id));
    dispatch(getTournamentLocation(id));
    dispatch(getTournamentSchedules(id));

    const breadcrumbs = [
      {value: 'Home', url: '/', active: false},
      {value: 'Tournaments', url: '/tournaments', active: false},
      {value: id, url: null, active: true},
    ];
    dispatch(setBreadcrumbs(breadcrumbs))
  }

  render() {
    return (
      <div>
        <TournamentDisplayComponent />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(TournamentPage);