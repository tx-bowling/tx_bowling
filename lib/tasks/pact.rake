# frozen_string_literal: true

require 'pact/tasks'

namespace :pact do
  desc 'Verify contracts with clients'
  task test: :environment do
    Rails.env = 'test'
    system('rake db:reset RAILS_ENV=test')
    system('rake pact:verify RAILS_ENV=test')
  end
end
