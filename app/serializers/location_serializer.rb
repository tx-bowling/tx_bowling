# frozen_string_literal: true

# Json serializer for Location
class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :lane_count, :has_restaurant, :has_bar, :address, :created_at, :updated_at
end
