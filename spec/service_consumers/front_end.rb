# frozen_string_literal: true

Pact.provider_states_for "TX Bowling - Front End" do

  provider_state "there are multiple locations" do
    set_up do
      FactoryBot.create_list(:location, 2)
    end
  end

  provider_state "there is a location with an id of 1" do
    set_up do
      location = FactoryBot.create(:location)
      location.id = 1
      location.save
    end
  end

  provider_state "there are multiple addresses" do
    set_up do
      FactoryBot.create_list(:address, 2, :with_secondary_address)
    end
  end

  provider_state "there is an address with an id of 1" do
    set_up do
      address = FactoryBot.create(:address, :with_secondary_address)
      address.id = 1
      address.save
    end
  end


  provider_state "there are multiple tournaments" do
    set_up do
      FactoryBot.create_list(:tournament, 2, :with_schedules)
    end
  end

  provider_state "there is a tournament with an id of 1" do
    set_up do
      tournament = FactoryBot.create(:tournament)
      tournament.id = 1
      tournament.save!
      FactoryBot.create_list(:schedule, 2, tournament: tournament)
    end
  end
end
