import React from 'react'
import { connect } from "react-redux";
import { Divider, Row, Col, Typography } from 'antd';
import CurrencyFormat from 'react-currency-format';

import LoadingComponent from "../LoadingComponent";

const { Title } = Typography;

class TournamentDisplayComponent extends React.Component {
  addressQuery = () => {
    const { location, address } = this.props;
    return `${location.name} ${address.street_address}, ${address.secondary_address}, ${address.city}, ${address.state} ${address.zip_code}`
  };

  render() {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;
    const { address, tournament, loading } = this.props;

    return (
      <div>
        {loading && <div style={{'textAlign': 'center'}}><LoadingComponent /></div>}
        {!loading && <div style={{'textAlign': 'left'}}>
            <Title>{tournament.name}</Title>
            <Row>
              <Col lg={11} xs={24}>
                <Title level={3}>Dates and Times</Title>
                <span>Schedules go here</span>
                <Title level={3}>Cost</Title>
                Entry Fee:
                <CurrencyFormat
                  fixedDecimalScale={true}
                  decimalScale={2}
                  displayType={'text'}
                  prefix={' $'}
                  value={tournament.entry_cost/100}
                />
                <br />
                Available Side-pots:
                <ul>
                  {tournament.side_pots_available.map((sidePot, index) =>
                    <li key={index}>{sidePot}</li>
                  )}
                </ul>
                <Title level={3}>Location</Title>
                <div>
                  <span>{address.street_address}</span>
                  <br/>
                  {address.secondary_address !== '' &&
                  <div>
                    <span>address.secondary_address</span>
                    <br/>
                  </div>
                  }
                  <span>{address.city}, {address.state} {address.zip_code}</span>
                </div>
                <iframe
                  title={'Google Map'}
                  width="100%"
                  height="450"
                  frameBorder="0" style={{border: 0}}
                  src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${this.addressQuery()}`}
                  allowFullScreen
                />
              </Col>
              <Col lg={2} xs={0} style={{'textAlign': 'center'}}>
                <Divider type="vertical" style={{height: '100%', 'display': 'inline-block'}}/>
              </Col>
              <Col lg={11} xs={24}>
                <Title level={3}>More Info</Title>
                <span>Sign up at: <a href={tournament.link_to_source}>{tournament.source_description}</a></span>
                <img src={tournament.flier} style={{width: '100%', 'paddingTop': '10px'}} alt={'Tournament flier'} />
              </Col>
            </Row>
          </div>
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { tournament } = state;

  return {
    loading: Object.keys(tournament).length === 0 || tournament?.data?.location?.address === undefined ? true : tournament.loading,
    tournament: tournament?.data,
    location: tournament?.data?.location,
    address: tournament?.data?.location?.address,
  };
}

export default connect(mapStateToProps)(TournamentDisplayComponent);