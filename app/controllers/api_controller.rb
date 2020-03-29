# frozen_string_literal: true

# Base controller to inherit from for API controllers
class ApiController < ActionController::API
  respond_to :json
end
