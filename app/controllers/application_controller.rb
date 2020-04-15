# frozen_string_literal: true

# Base controller to inherit from
class ApplicationController < ActionController::API
  include ActionController::Serialization
end
