FactoryBot.define do
  factory :address do
    street_1 { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    zip { Faker::Address.zip }
    notes { Faker::Superhero.descriptor }

    trait :with_street_2 do
      street_2 { Faker::Address.secondary_address }
    end

    trait :with_coordinates do
      latitude { Faker::Address.latitude }
      longitude { Faker::Address.longitude }
    end

    trait :valid_for_webmock do
      street_1 { '5700 Grover Ave' }
      city { 'Austin' }
      state { 'TX' }
      zip { '78756' }
    end

    trait :invalid_for_webmock do
      street_1 { '123 Wrong Way' }
      city { 'Invalid' }
      state { 'WI' }
      zip { '54321' }
    end

  end
end
