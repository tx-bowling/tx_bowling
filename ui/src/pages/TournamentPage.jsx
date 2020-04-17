import React from 'react'
import { connect } from 'react-redux'

import TournamentDisplayComponent from './../components/tournaments/TournamentDisplayComponent';

class TournamentPage extends React.Component {
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