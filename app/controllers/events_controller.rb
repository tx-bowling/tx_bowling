class EventsController < ApplicationController

  # GET /events
  # GET /events.json
  def index
    render json: Event.all
  end
end
