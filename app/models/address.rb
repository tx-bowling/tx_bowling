class Address < ApplicationRecord
  include TxBowling::Import[geocoder: 'geocoder']

  has_one :location

  validates_presence_of :street_1, :city, :state, :zip
  validate :address_found?

  before_save :generate_geolocation

  private

  def generate_geolocation
    self.latitude = nil
    self.longitude = nil

    address = "#{street_1}, #{city}, #{state} #{zip}"
    results = geocoder.search(address)

    return self if results.empty?

    location = results[0]
    self.latitude = location.data['lat']
    self.longitude = location.data['lon']
    self
  end

  def address_found?
    return true if latitude.present? && longitude.present?

    errors.add(:address, "can't be found")
  end
end
