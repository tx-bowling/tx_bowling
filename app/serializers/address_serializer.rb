# frozen_string_literal: true

# Json serializer for Address
class AddressSerializer < ActiveModel::Serializer
  attributes :id,
             :street_address,
             :secondary_address,
             :city,
             :state,
             :zip_code,
             :latitude,
             :longitude,
             :notes,
             :created_at,
             :updated_at
end
