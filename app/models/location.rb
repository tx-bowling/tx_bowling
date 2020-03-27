class Location < ApplicationRecord
  belongs_to :address

  validates_presence_of :name
  validates :has_bar, inclusion: { in: [true, false] }
  validates :has_restaurant, inclusion: { in: [true, false] }
end
