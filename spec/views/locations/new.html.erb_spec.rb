require 'rails_helper'

RSpec.describe "locations/new", type: :view do
  before(:each) do
    assign(:location, Location.new(
      name: "MyString",
      lane_count: 1,
      has_restaurant: false,
      has_bar: false,
      address: nil
    ))
  end

  it "renders new location form" do
    render

    assert_select "form[action=?][method=?]", locations_path, "post" do

      assert_select "input[name=?]", "location[name]"

      assert_select "input[name=?]", "location[lane_count]"

      assert_select "input[name=?]", "location[has_restaurant]"

      assert_select "input[name=?]", "location[has_bar]"

      assert_select "input[name=?]", "location[address_id]"
    end
  end
end
