FactoryBot.define do
  factory :schedule do
    date { "2020-04-14" }
    time { "2020-04-14 20:29:20" }
    event { "MyString" }
    tournament { nil }
  end
end
