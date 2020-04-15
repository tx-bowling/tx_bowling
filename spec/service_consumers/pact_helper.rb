require 'pact/provider/rspec'

require_relative "./front_end"

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __dir__)
# Prevent database truncation if the environment is production
if Rails.env.production?
  abort('The Rails environment is running in production mode!')
end
require 'rspec/rails'
# Add additional requires below this line. Rails is not loaded until this point!
require 'support/dry_system'

Pact.set_up do
  DatabaseCleaner.strategy = :transaction
  DatabaseCleaner.start
end

Pact.tear_down do
  DatabaseCleaner.clean
end

Pact.service_provider 'TX Bowling - Service' do

  honours_pact_with "TX Bowling - Front End" do
    pact_uri 'ui/pact/pacts/tx_bowling_-_front_end-tx_bowling_-_service.json'
  end
end
