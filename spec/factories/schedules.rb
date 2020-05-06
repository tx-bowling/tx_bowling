FactoryBot.define do
  factory :schedule do
    scheduled_at { DateTime.now }
    event
    tournament
  end
end
