# frozen_string_literal: true

# Address model
class Address < ApplicationRecord
  has_one :location

  validates_presence_of :street_1, :city, :state, :zip

  before_save :generate_geolocation

  private

  def generate_geolocation
    return self if persisted?

    self.latitude = nil
    self.longitude = nil

    address = "#{street_1}, #{city}, #{state} #{zip}"
    results = geocoder.search(address)

    if results.empty?
      errors.add(:address, 'is not geolocatable')
      raise ActiveRecord::RecordInvalid, self
    end

    # Symbolizing and to_s for consistency across Geocoder::Result types
    location = results[0].data.symbolize_keys
    self.latitude = location[:lat]
    self.longitude = location[:lon]
    self
  end

  def geocoder
    TxBowling::Container['geocoder']
  end
end
