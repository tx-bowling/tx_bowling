# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'locations/index', type: :view do
  before(:each) do
    assign(:locations, [
             Location.create!(
               name: 'Name',
               lane_count: 2,
               has_restaurant: false,
               has_bar: false,
               address: nil
             ),
             Location.create!(
               name: 'Name',
               lane_count: 2,
               has_restaurant: false,
               has_bar: false,
               address: nil
             )
           ])
  end

  it 'renders a list of locations' do
    render
    assert_select 'tr>td', text: 'Name'.to_s, count: 2
    assert_select 'tr>td', text: 2.to_s, count: 2
    assert_select 'tr>td', text: false.to_s, count: 2
    assert_select 'tr>td', text: false.to_s, count: 2
    assert_select 'tr>td', text: nil.to_s, count: 2
  end
end
