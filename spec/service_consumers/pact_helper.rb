require 'pact/provider/rspec'

require_relative "./front_end"

Pact.service_provider 'TX Bowling - Service' do
  honours_pact_with "TX Bowling - Front End" do
    pact_uri 'ui/pact/pacts/tx_bowling_-_front_end-tx_bowling_-_service.json'
  end
end
