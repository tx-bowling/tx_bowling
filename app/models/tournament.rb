# frozen_string_literal: true

# Tournament
class Tournament < ApplicationRecord
  belongs_to :location
  belongs_to :contact, class_name: '::User'
  has_many :schedules

  def side_pots_available
    self[:side_pots_available].split('|')
  end
end
