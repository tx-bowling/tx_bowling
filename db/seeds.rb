# frozen_string_literal: true

%w[Singles Doubles Singles/Doubles Team Baker Dutch Match\ Play Step\ Ladder Baker\ Doubles].each do |event|
  FactoryBot.create(:event, name: event)
end

FactoryBot.create(:user, :admin, email: 'admin@txbowling.com')
FactoryBot.create(:user, email: 'user@txbowling.com')