import React from 'react';
import { connect } from 'react-redux';
import {Button, Input, InputNumber, Typography, Checkbox, DatePicker, TimePicker} from 'antd';
import { Form, InputGroup, Row, Col } from 'react-bootstrap'

import {Link} from "react-router-dom";
import { PlusCircleTwoTone } from '@ant-design/icons';

import {getLocations} from "../../actions/locations";

const { Title } = Typography;

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
      contact_methods: []
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

  checkboxChange = (checkedValues) => {
    this.setState((state) => {
      return {...state, contact_methods: checkedValues};
    });
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



  render() {

    const { contact_methods } = this.state;
    const email = '';
    const phone = '';
    const other = '';
    const contactOptions = [
      { label: 'Phone', value: 'phone' },
      { label: 'Email', value: 'email' },
      { label: 'Other', value: 'other' },
    ];


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
              <Form.Label>Location</Form.Label>
              <Form.Control as="select">
                {this.locationOptions()}
              </Form.Control>
              <Form.Text>
                Not found? <Link to={'/locations/new'}>Add a location</Link>
              </Form.Text>
            </Form.Group>

            <h2>Schedule</h2>
            <div id={'schedules'}>
            {/*  <Form.Item label="Event" style={{ marginBottom: 0 }}>*/}
            {/*    <Row>*/}
            {/*      <Col span={7}>*/}
            {/*        <Form.Item*/}
            {/*          placeholder="Event"*/}
            {/*          name="event"*/}
            {/*        >*/}
            {/*          <Input/>*/}
            {/*        </Form.Item>*/}
            {/*      </Col>*/}
            {/*      <Col span={8} offset={1}>*/}
            {/*        <Form.Item*/}
            {/*          placeholder="Date"*/}
            {/*          name="date"*/}
            {/*        >*/}
            {/*          <DatePicker onChange={this.onDateChange} />*/}
            {/*        </Form.Item>*/}
            {/*      </Col>*/}
            {/*      <Col span={7} offset={1}>*/}
            {/*        <Form.Item*/}
            {/*          placeholder="Time"*/}
            {/*          name="time"*/}
            {/*        >*/}
            {/*          <TimePicker use12Hours format={'h:mm a'} minuteStep={5}/>*/}
            {/*        </Form.Item>*/}
            {/*      </Col>*/}
            {/*    </Row>*/}
            {/*  </Form.Item>*/}
            {/*  <Form.Item label="Event" style={{ marginBottom: 0 }}>*/}
            {/*    <Row>*/}
            {/*      <Col span={7}>*/}
            {/*        <Form.Item*/}
            {/*          placeholder="Event"*/}
            {/*          name="event"*/}
            {/*        >*/}
            {/*          <Input/>*/}
            {/*        </Form.Item>*/}
            {/*      </Col>*/}
            {/*      <Col span={8} offset={1}>*/}
            {/*        <Form.Item*/}
            {/*          placeholder="Date"*/}
            {/*          name="date"*/}
            {/*        >*/}
            {/*          <DatePicker onChange={this.onDateChange} />*/}
            {/*        </Form.Item>*/}
            {/*      </Col>*/}
            {/*      <Col span={7} offset={1}>*/}
            {/*        <Form.Item*/}
            {/*          placeholder="Time"*/}
            {/*          name="time"*/}
            {/*        >*/}
            {/*          <TimePicker use12Hours format={'h:mm a'} minuteStep={5}/>*/}
            {/*        </Form.Item>*/}
            {/*      </Col>*/}
            {/*    </Row>*/}
            {/*  </Form.Item>*/}
            </div>
            {/*<Row>*/}
            {/*  <Col span={12} style={{textAlign: 'right'}}>*/}
            {/*    <PlusCircleTwoTone style={{ fontSize: '24px'}}/>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <h2>Marketing</h2>
            {/*<Form.Item*/}
            {/*  label="Source description"*/}
            {/*  name="source_description"*/}
            {/*  rules={[{ required: true, message: "Please input the tournament's source description." }]}*/}
            {/*>*/}
            {/*  <Input*/}
            {/*    onChange={this.handleInputChange.bind(this, 'source_description')}*/}
            {/*  />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item*/}
            {/*  label="Source url"*/}
            {/*  name="source_url"*/}
            {/*  rules={[{ required: true, message: "Please input the tournament's source_url." }]}*/}
            {/*>*/}
            {/*  <Input*/}
            {/*    onChange={this.handleInputChange.bind(this, 'source_url')}*/}
            {/*  />*/}
            {/*</Form.Item>*/}

            <h2>Contact Information</h2>
            {/*<Form.Item*/}
            {/*  label="Host"*/}
            {/*  name="host"*/}
            {/*  rules={[{ required: true, message: "Please input the tournament's host." }]}*/}
            {/*>*/}
            {/*  <Input*/}
            {/*    onChange={this.handleInputChange.bind(this, 'host')}*/}
            {/*  />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item*/}
            {/*  label="Preferred contact methods"*/}
            {/*  name="contact_methods"*/}
            {/*  rules={[{ required: true, message: "Please input the tournament's preferred contact method." }]}*/}
            {/*>*/}
            {/*  <Checkbox.Group options={contactOptions} defaultValue={[]} onChange={this.checkboxChange} />*/}
            {/*</Form.Item>*/}
            {/*{contact_methods.includes('phone') &&*/}
            {/*  <Form.Item*/}
            {/*    label="Phone"*/}
            {/*    name="phone"*/}
            {/*    rules={[{ required: true, message: "Please input the tournament's contact phone." }]}*/}
            {/*  >*/}
            {/*    <Input*/}
            {/*      defaultValue={phone}*/}
            {/*      value={phone}*/}
            {/*      onChange={this.handleInputChange.bind(this, 'phone')}*/}
            {/*    />*/}
            {/*  </Form.Item>*/}
            {/*}*/}
            {/*{contact_methods.includes('email') &&*/}
            {/*<Form.Item*/}
            {/*  label="Email"*/}
            {/*  name="email"*/}
            {/*  rules={[{required: true, message: "Please input the tournament's contact email."}]}*/}
            {/*>*/}
            {/*  <Input*/}
            {/*    defaultValue={email}*/}
            {/*    value={email}*/}
            {/*    onChange={this.handleInputChange.bind(this, 'email')}*/}
            {/*  />*/}
            {/*</Form.Item>*/}
            {/*}*/}
            {/*{contact_methods.includes('other') &&*/}
            {/*  <Form.Item*/}
            {/*    label="Other"*/}
            {/*    name="other"*/}
            {/*    rules={[{ required: true, message: "Please input the tournament's contact other method." }]}*/}
            {/*  >*/}
            {/*    <Input*/}
            {/*      defaultValue={other}*/}
            {/*      value={other}*/}
            {/*      onChange={this.handleInputChange.bind(this, 'other')}*/}
            {/*    />*/}
            {/*  </Form.Item>*/}
            {/*}*/}
            {/*<Form.Item {...this.nonLabelLayout}>*/}
            {/*  <Button type="primary" htmlType="submit">Submit</Button>*/}
            {/*</Form.Item>*/}
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