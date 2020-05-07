FactoryBot.define do
  factory :user do
    email { Faker::Internet.safe_email }
    password_digest { BCrypt::Password.create('Test1234') }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    admin { false }

    trait :admin do
      admin { true }
    end
  end
end
