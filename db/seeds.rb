# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FactoryBot.create(:event, name: 'Singles')
FactoryBot.create(:event, name: 'Doubles')
FactoryBot.create(:event, name: 'Singles/Doubles')
FactoryBot.create(:event, name: 'Team')
FactoryBot.create(:event, name: 'Baker')
FactoryBot.create(:event, name: 'Dutch')
FactoryBot.create(:event, name: 'Match Play')
FactoryBot.create(:event, name: 'Step Ladder')