import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

import {getLocations} from "../../actions/locations";

class TournamentFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Test Name',
      entry_cost: 3050/100.0,
      location_id: 1,
      schedule_ids: [1,2],
      side_pots_available: (['brackets', 'eliminator']),
      source_url: 'http://www.bowl.com',
      source_description: 'USBC Open',
      flier: 'http://www.fillmurray.com/850/1100',
      contact_id: 1,
      contactMethods: []
    };
  }

  formRef = React.createRef();


  componentDidMount() {
    const { dispatch } = this.props;
    const { name, entry_cost, location_id, schedule_ids, side_pots_available, source_url, source_description, flier, contact_id, contact_methods } = this.state;

    dispatch(getLocations());
  }


  handleInputChange = (name, event) => {
    this.setState({...this.state, [name]: event.target.value});
  };

  handleContactMethodChange = (name, event) => {
    let methods = this.state.contactMethods;
    if(event.target.checked) {
      methods.push(name)
    } else {
      methods = methods.filter(item => item !== name )
    }

    this.setState({...this.state, contactMethods: methods})
  };

   onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  locationOptions = () => {
    const { locations } = this.props;

    if(locations.data === undefined) {
      return null;
    }
    return Object.values(locations.data).map(location => {
      const address = location.address;

      return <option key={location.id}>{location.name} - {address.city}, {address.state}</option>

    });
  };

  blankEvent = () => {
    return (
      <div>
        <Form.Label column sm="2">
          Event
        </Form.Label>
        <Form.Row>
          <Col>
          <Form.Control as="select" placeholder="Event" />
            </Col>
          <Col>
            <Form.Control placeholder="Date" />
          </Col>
          <Col>
            <Form.Control placeholder="Time" />
          </Col>
        </Form.Row>
      </div>
    )
  };

  render() {

    const { contactMethods } = this.state;

    const sidePotOptions = [
      <option key='none'>None</option>,
      <option key='brackets'>Brackets</option>,
      <option key='high_game'>High Game</option>,
      <option key='eliminator'>Eliminator</option>,
      <option key='clean_game'>Clean Game</option>
    ];

    return (
      <Row>
        <Col sm={8} md={6}>
          <Form>
            <h2>Tournament Details</h2>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'name')} />
            </Form.Group>
            <Form.Group controlId="entry_fee">
              <Form.Label>Entry Fee</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="entry_fee">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  aria-describedby="entry_fee"
                  type="text"
                  onChange={this.handleInputChange.bind(this, 'entry_fee')}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="side_pots_available">
              <Form.Label>Side Pots</Form.Label>
              <Form.Control as="select" multiple>
                {sidePotOptions}
              </Form.Control>
            </Form.Group>

            <h2>Location</h2>
            <Form.Group controlId="location">
              <Form.Label>Alley</Form.Label>
              <Form.Control as="select">
                {this.locationOptions()}
              </Form.Control>
              <Form.Text>
                Not found? <Link to={'/locations/new'}>Add a location</Link>
              </Form.Text>
            </Form.Group>

            <h2>Schedule</h2>
            <div id={'schedules'}>
              {this.blankEvent()}
              {this.blankEvent()}
            </div>
            <div>
              <FontAwesomeIcon icon="plus-circle" />
            </div>

            <h2>Contact Information</h2>
            <Form.Group controlId="host">
              <Form.Label>Host</Form.Label>
              <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'host')} />
            </Form.Group>

            <div>
              <Form.Label>Preferred Contact Method</Form.Label>
              <Form.Row>
                <Col>
                 <Form.Check inline label="Phone" type="checkbox" id="contact-phone" onChange={this.handleContactMethodChange.bind(this, 'phone')}/>
                </Col>
                <Col>
                 <Form.Check inline label="Email" type="checkbox" id="contact-email" onChange={this.handleContactMethodChange.bind(this, 'email')}/>
                </Col>
                <Col>
                  <Form.Check inline label="Other" type="checkbox" id="contact-other" onChange={this.handleContactMethodChange.bind(this, 'other')}/>
                </Col>
              </Form.Row>
              {contactMethods.includes('phone') &&
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'contactPhone')}/>
                </Form.Group>
              }
              {contactMethods.includes('email') &&
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'contactEmail')}/>
                </Form.Group>
              }
              {contactMethods.includes('other') &&
                <Form.Group controlId="other">
                  <Form.Label>Other</Form.Label>
                  <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'contactOther')}/>
                </Form.Group>
              }
            </div>


            <h2>Marketing</h2>
            <Form.Group controlId="source_description">
              <Form.Label>Source Description</Form.Label>
              <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'source_description')}/>
            </Form.Group>
            <Form.Group controlId="source_url">
              <Form.Label>Source Url</Form.Label>
              <Form.Control type="text" onChange={this.handleInputChange.bind(this, 'source_url')}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { locations } = state;

  return {
    locations: locations
  };
}

export default connect(mapStateToProps)(TournamentFormComponent);