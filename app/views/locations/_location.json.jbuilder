# frozen_string_literal: true

json.extract! location, :id, :name, :lane_count, :has_restaurant, :has_bar, :address_id, :created_at, :updated_at
json.url location_url(location, format: :json)
