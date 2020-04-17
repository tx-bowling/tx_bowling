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
  end
end
