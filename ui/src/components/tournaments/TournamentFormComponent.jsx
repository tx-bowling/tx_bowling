import React from 'react';
import { connect } from 'react-redux';
import {Button, Form, Input, InputNumber, Typography, Select, Checkbox, Row, Col} from 'antd';
import {Link} from "react-router-dom";

import {getLocations} from "../../actions/locations";

const { Title } = Typography;
const { Option } = Select;

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

    dispatch(getLocations())

    this.formRef.current.setFieldsValue({
      name: name,
      entry_cost: entry_cost,
      location_id: location_id,
      side_pots_available: side_pots_available,
      source_url: source_url,
      source_description: source_description,
      flier: flier
    });

  }

layout = {
    labelCol: { offset: 0, span: 4 },
    wrapperCol: { span: 8 },

  };

  nonLabelLayout = {
    wrapperCol: { offset: 4, span: 12 },
  };

  handleInputChange = (name, event) => {
    this.setState({...this.state, [name]: event.target.value});
  };

  checkboxChange = (checkedValues) => {
    this.setState((state) => {
      return {...state, contact_methods: checkedValues};
    });
  };

  locationOptions = () => {
    const { locations } = this.props;

    if(locations.data === undefined) {
      return null;
    }
    return Object.values(locations.data).map(location => {
      const address = location.address;

      return <Option key={location.id}>{location.name} - {address.city}, {address.state}</Option>

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
      <Option key='brackets'>Brackets</Option>,
      <Option key='high_game'>High Game</Option>,
      <Option key='eliminator'>Eliminator</Option>,
      <Option key='clean_game'>Clean Game</Option>
    ];

    return (
      <div>
        <Form
          {...this.layout}
          ref={this.formRef}
          name="tournament"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          scrollToFirstError={true}
          layout="horizontal"
        >

          <Title level={2}>Tournament Details</Title>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the tournament's name." }]}
          >
            <Input
              onChange={this.handleInputChange.bind(this, 'name')}
            />
          </Form.Item>
          <Form.Item
            label="Entry Fee"
            name="entry_cost"
            rules={[{ required: true, message: "Please input the tournament's entry fee." }]}
          >
            <InputNumber
              defaultValue={1000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)|(\.)/g, '')}
              min={0}
              precision={2}
              onChange={this.handleInputChange.bind(this, 'entry_cost')}
            />
          </Form.Item>
          <Form.Item
            label="Side Pots"
            name="side_pots_available"
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={this.handleInputChange.bind(this, 'side_pots_available')}
            >
              {sidePotOptions}
            </Select>,
          </Form.Item>

          <Title level={2}>Location</Title>
          <Form.Item
            label="Location"
          >
            <Select showSearch>{this.locationOptions()}</Select>
          </Form.Item>
          <Row>
            <Col span={8} offset={4}>
              Not found? <Link to={'/locations/new'}>Add a location</Link>
            </Col>
          </Row>
          <Title level={2}>Marketing</Title>
          <Form.Item
            label="Source description"
            name="source_description"
            rules={[{ required: true, message: "Please input the tournament's source description." }]}
          >
            <Input
              onChange={this.handleInputChange.bind(this, 'source_description')}
            />
          </Form.Item>
          <Form.Item
            label="Source url"
            name="source_url"
            rules={[{ required: true, message: "Please input the tournament's source_url." }]}
          >
            <Input
              onChange={this.handleInputChange.bind(this, 'source_url')}
            />
          </Form.Item>

          <Title level={2}>Contact Information</Title>
          <Form.Item
            label="Host"
            name="host"
            rules={[{ required: true, message: "Please input the tournament's host." }]}
          >
            <Input
              onChange={this.handleInputChange.bind(this, 'host')}
            />
          </Form.Item>
          <Form.Item
            label="Preferred contact methods"
            name="contact_methods"
            rules={[{ required: true, message: "Please input the tournament's preferred contact method." }]}
          >
            <Checkbox.Group options={contactOptions} defaultValue={[]} onChange={this.checkboxChange} />
          </Form.Item>
          {contact_methods.includes('phone') &&
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input the tournament's contact phone." }]}
            >
              <Input
                defaultValue={phone}
                value={phone}
                onChange={this.handleInputChange.bind(this, 'phone')}
              />
            </Form.Item>
          }
          {contact_methods.includes('email') &&
          <Form.Item
            label="Email"
            name="email"
            rules={[{required: true, message: "Please input the tournament's contact email."}]}
          >
            <Input
              defaultValue={email}
              value={email}
              onChange={this.handleInputChange.bind(this, 'email')}
            />
          </Form.Item>
          }
          {contact_methods.includes('other') &&
            <Form.Item
              label="Other"
              name="other"
              rules={[{ required: true, message: "Please input the tournament's contact other method." }]}
            >
              <Input
                defaultValue={other}
                value={other}
                onChange={this.handleInputChange.bind(this, 'other')}
              />
            </Form.Item>
          }
          <Form.Item {...this.nonLabelLayout}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
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