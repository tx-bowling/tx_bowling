# frozen_string_literal: true

# Communication layer for Tournaments
class TournamentsController < ApplicationController
  before_action :set_tournament, only: %i[show update destroy]

  # GET /tournaments
  # GET /tournaments.json
  def index
    render json: Tournament.all
  end

  # GET /tournaments/1
  # GET /tournaments/1.json
  def show
    render json: @tournament
  end

  # POST /tournaments
  # POST /tournaments.json
  def create
    @tournament = Tournament.new(tournament_params)

    if @tournament.save
      render :show, status: :created, location: @tournament
    else
      render json: @tournament.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tournaments/1
  # PATCH/PUT /tournaments/1.json
  def update
    if @tournament.update(tournament_params)
      render :show, status: :ok, location: @tournament
    else
      render json: @tournament.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tournaments/1
  # DELETE /tournaments/1.json
  def destroy
    @tournament.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_tournament
    @tournament = Tournament.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def tournament_params
    params.require(:tournament).permit(
      :name, :location_id, :entry_cost, :side_pots_available, :link_to_source, :flier, :contact_id
    )
  end
end
