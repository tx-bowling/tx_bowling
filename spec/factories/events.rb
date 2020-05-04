FactoryBot.define do
  factory :event do
    name { %w[Singles
              Doubles
              Singles/Doubles
              Team
              Baker
              Dutch
              Match\ Play
              Step\ Ladder].sample }
  end
end
