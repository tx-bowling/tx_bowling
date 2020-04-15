# frozen_string_literal: true

FactoryBot.define do
  factory :address do
    street_address { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    zip_code { Faker::Address.zip }
    notes { Faker::Superhero.descriptor }

    trait :with_secondary_address do
      secondary_address { Faker::Address.secondary_address }
    end

    trait :with_coordinates do
      latitude { Faker::Address.latitude }
      longitude { Faker::Address.longitude }
    end

    trait :valid_for_webmock do
      street_address { '5700 Grover Ave' }
      city { 'Austin' }
      state { 'TX' }
      zip_code { '78756' }
    end

    trait :invalid_for_webmock do
      street_address { '123 Wrong Way' }
      city { 'Invalid' }
      state { 'WI' }
      zip_code { '54321' }
    end
  end
end
