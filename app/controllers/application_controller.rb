# frozen_string_literal: true

# Base controller to inherit from
class ApplicationController < ActionController::Base
  respond_to :json
end
