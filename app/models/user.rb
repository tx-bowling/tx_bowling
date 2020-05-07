class User < ApplicationRecord
  has_secure_password

  has_many :tournaments, foreign_key: :contact_id
end
