# frozen_string_literal: true

# Communication layer for Addresses
class AddressesController < ApplicationController
  before_action :set_location, only: %i[show]

  # GET /api/v1/addresses.json
  def index
    @addresses = Address.all
  end

  # GET /api/v1/addresses/:id.json
  def show; end

  # POST /api/v1/addresses.json
  def create
    @address = Address.new(address_params)

    if @address.save
      render :show, status: :created, address: @address
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  private

  def address_params
    params.require(:address).permit(:street_1, :street_2, :city, :state, :zip, :notes)
  end
end
