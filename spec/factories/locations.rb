FactoryBot.define do
  factory :location do
    name { "#{Faker::House.furniture} #{%w(Lanes Alley Bowl Center).sample }" }
    lane_count { rand(12) * 2 + 6 }
    has_restaurant { true }
    has_bar { true }
    address { FactoryBot.build(:address, :with_coordinates) }

    before(:create) { |location| Address.skip_callback(:save, :before, :generate_geolocation) }
    after(:create) { |location| Address.set_callback(:save, :before, :generate_geolocation) }

    trait :without_lanes do
      lane_count { 0 }
    end

    trait :without_a_restaurant do
      has_restaurant { false }
    end

    trait :without_a_bar do
      has_bar { false }
    end
  end
end
