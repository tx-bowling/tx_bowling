FactoryBot.define do
  factory :location do
    name { "MyString" }
    lane_count { 1 }
    has_restaurant { false }
    has_bar { false }
    address { nil }
  end
end
