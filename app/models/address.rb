# frozen_string_literal: true

# Address model
class Address < ApplicationRecord
  has_one :location

  validates_presence_of :street_address, :city, :state, :zip_code
end
