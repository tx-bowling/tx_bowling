# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.safe_email }
    password { 'Test1234' }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }

    trait :with_photo do
      photo { 'https://fillmurray.com/240/240' }
    end
  end
end
