# frozen_string_literal: true

# User model
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :lockable

  validates_presence_of :email, :encrypted_password, :first_name, :last_name
  has_many :tournaments, foreign_key: :contact_id
end
