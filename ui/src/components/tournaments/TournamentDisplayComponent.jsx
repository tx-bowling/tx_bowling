import React from 'react'
import {connect} from "react-redux";
import {Divider, Row, Col, Typography} from 'antd';
import CurrencyFormat from 'react-currency-format';

const { Title } = Typography;


class TournamentDisplayComponent extends React.Component {
  render() {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;
    const { tournament, location, address } = this.props;
    const addressQuery = `${location.name} ${address.street_address}, ${address.secondary_address}, ${address.city}, ${address.state} ${address.zip_code}`

    return (
      <div>
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
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${addressQuery}`}
              allowFullScreen>
            </iframe>
          </Col>
          <Col lg={2} xs={0} style={{'text-align': 'center'}}>
            <Divider type="vertical" style={{height: '100%', 'display': 'inline-block'}}/>
          </Col>
          <Col lg={11} xs={24}>
            <Title level={3}>More Info</Title>
            <span>Sign up at: <a src={tournament.link_to_source}>{tournament.source_description}</a></span>
            <img src={tournament.flier} style={{width: '100%', 'padding-top': '10px'}}/>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tournament: {
      "id": 1,
      "name": "Trusty Tournament",
      "location_id": 1,
      "schedule_ids": [
        1
      ],
      "entry_cost": 5050,
      "side_pots_available": [
        "brackets"
      ],
      "link_to_source": "http://www.bowl.com",
      "source_description": "USBC",
      "flier": "http://www.fillmurray.com/850/1100",
      "contact_id": 1,
      "created_at": "2020-04-13T03:21:34.548Z",
      "updated_at": "2020-04-13T03:21:34.548Z"
    },
    location: {
      "id": 1,
      "name": "Dart Bowl",
      "lane_count": 24,
      "has_restaurant": true,
      "has_bar": true,
      "address_id": 2,
      "created_at": "2020-04-13T03:21:34.548Z",
      "updated_at": "2020-04-13T03:21:34.548Z"
    },
    address: {
      "id": 1,
      "street_address": "5700 Grover Ave",
      "secondary_address": "",
      "city": "Austin",
      "state": "TX",
      "zip_code": "78756",
      "notes": "Near the school",
      "created_at": "2020-04-13T03:21:34.548Z",
      "updated_at": "2020-04-13T03:21:34.548Z"
    }
  };
}

export default connect(mapStateToProps)(TournamentDisplayComponent);