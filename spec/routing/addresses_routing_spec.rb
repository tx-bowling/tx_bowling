# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AddressesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/v1/addresses').to route_to('addresses#index', format: :json)
    end

    it 'routes to #create' do
      expect(post: '/api/v1/addresses').to route_to('addresses#create', format: :json)
    end
  end
end
