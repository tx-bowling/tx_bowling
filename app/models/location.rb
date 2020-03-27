class Location < ApplicationRecord
  belongs_to :address

  validates_presence_of :name
  validates :has_bar, inclusion: { in: [true, false], message: 'must be boolean' }
  validates :has_restaurant, inclusion: { in: [true, false], message: 'must be boolean' }
end
