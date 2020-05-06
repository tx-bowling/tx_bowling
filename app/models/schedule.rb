# frozen_string_literal: true

# Schedule
class Schedule < ApplicationRecord
  belongs_to :tournament
  belongs_to :event
end
