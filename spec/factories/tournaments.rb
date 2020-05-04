FactoryBot.define do
  factory :tournament do
    name { "MyString" }
    location
    entry_fee { 1 }
    side_pots_available { "#{Faker::Company.buzzword}|#{Faker::Company.name}" }
    source_url { "MyString" }
    source_description { "MyString" }
    flier { "MyString" }
    contact { FactoryBot.create(:user) }

    trait :with_schedules do
      after(:create) do |tournament|
        FactoryBot.create_list(:schedule, 2, tournament: tournament)
      end
    end
  end
end
