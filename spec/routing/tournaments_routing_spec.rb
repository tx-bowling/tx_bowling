require "rails_helper"

RSpec.describe TournamentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/v1/tournaments.json").to route_to("tournaments#index", format: 'json')
    end

    it "routes to #show" do
      expect(get: "/api/v1/tournaments/1.json").to route_to("tournaments#show", id: "1", format: 'json')
    end


    it "routes to #create" do
      expect(post: "/api/v1/tournaments.json").to route_to("tournaments#create", format: 'json')
    end

    it "routes to #update via PUT" do
      expect(put: "/api/v1/tournaments/1.json").to route_to("tournaments#update", id: "1", format: 'json')
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/v1/tournaments/1.json").to route_to("tournaments#update", id: "1", format: 'json')
    end

    it "routes to #destroy" do
      expect(delete: "/api/v1/tournaments/1.json").to route_to("tournaments#destroy", id: "1", format: 'json')
    end
  end
end
