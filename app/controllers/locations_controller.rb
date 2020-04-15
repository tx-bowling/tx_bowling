# frozen_string_literal: true

# Communication layer for Locations
class LocationsController < ApplicationController
  before_action :set_location, only: %i[show edit update destroy]

  # GET /locations.json
  def index
    render json: Location.all
  end

  # GET /locations/1.json
  def show
    render json: @location
  end

  # POST /locations.json
  def create
    @location = Location.new(location_params)
    if @location.save
      render :show, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1.json
  def update
    if @location.update(location_params)
      render :show, status: :ok, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1.json
  def destroy
    @location.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def location_params
    params.require(:location).permit(:name, :lane_count, :has_restaurant, :has_bar, :address_id)
  end
end
