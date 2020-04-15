# frozen_string_literal: true

# Communication layer for Addresses
class AddressesController < ApplicationController
  before_action :set_address, only: %i[show]

  # GET /api/v1/addresses.json
  def index
    render json: Address.all
  end

  # GET /api/v1/addresses/:id.json
  def show
    render json: @address
  end

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

  # Use callbacks to share common setup or constraints between actions.
  def set_address
    @address = Address.find(params[:id])
  end

  def address_params
    params.require(:address).permit(:street_1, :street_2, :city, :state, :zip, :notes)
  end
end
