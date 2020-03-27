# frozen_string_literal: true

# Address model
class Address < ApplicationRecord
  include TxBowling::Import[geocoder: 'geocoder']

  has_one :location

  validates_presence_of :street_1, :city, :state, :zip
  validate :address_found?

  before_save :generate_geolocation

  private

  def generate_geolocation
    return self if persisted?

    self.latitude = nil
    self.longitude = nil

    address = "#{street_1}, #{city}, #{state} #{zip}"
    results = geocoder.search(address)

    return self if results.empty?

    # Symbolizing and to_s for consistency across Geocoder::Result types
    location = results[0].data.symbolize_keys
    self.latitude = location[:lat]
    self.longitude = location[:lon]
    self
  end

  def address_found?
    return true if latitude.present? && longitude.present?

    errors.add(:address, "can't be found")
  end
end
