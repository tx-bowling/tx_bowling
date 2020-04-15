# frozen_string_literal: true

# Address model
class Address < ApplicationRecord
  has_one :location

  validates_presence_of :street_address, :city, :state, :zip_code

  before_save :generate_geolocation

  private

  def generate_geolocation
    # TODO: Figure out
    if Rails.env.test? || Rails.env.development?
      return self if latitude.presence

      self.latitude = Faker::Address.latitude
      self.longitude = Faker::Address.longitude
      return self
    end

    return self if persisted?

    self.latitude = nil
    self.longitude = nil

    address = "#{street_address}, #{city}, #{state} #{zip_code}"
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
