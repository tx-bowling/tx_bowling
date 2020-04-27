import React from 'react'
import { connect } from 'react-redux'

import TournamentDisplayComponent from './../components/tournaments/TournamentDisplayComponent';
import {getTournament, getTournamentLocation} from "../actions/tournament";
import {setBreadcrumbs} from "../actions/breadcrumbs";

class TournamentPage extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id;
    dispatch(getTournament(id));
    dispatch(getTournamentLocation(id));

    const breadcrumbs = [
      {value: 'Home', url: '/', current: false},
      {value: 'Tournaments', url: '/tournaments', current: false},
      {value: id, url: `/tournaments/${id}`, current: true},
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