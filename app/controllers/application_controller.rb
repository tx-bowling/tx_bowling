# frozen_string_literal: true

# Base controller to inherit from
class ApplicationController < ActionController::API
  around_action :handle_exceptions, if: proc { request.path.include?('/api') }

  # Catch exception and return JSON-formatted error
  def handle_exceptions
    begin
      yield
    rescue ActiveRecord::RecordNotFound => e
      @status = 404
      @message = 'Record not found'
    rescue ActiveRecord::RecordInvalid => e
      render_unprocessable_entity_response(e.record) && return
    rescue ArgumentError => e
      @status = 400
    rescue StandardError => e
      @status = 500
    end
    return if e.class == NilClass

    json_response({
                    success: false,
                    message: @message || e.class.to_s,
                    errors: [{ detail: e.message }]
                  }, @status)
  end
end
