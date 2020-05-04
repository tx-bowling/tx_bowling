# frozen_string_literal: true

class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :street_address, null: false, default: ''
      t.string :secondary_address, null: false, default: ''
      t.string :city,     null: false, default: ''
      t.string :state,    null: false, default: ''
      t.string :zip_code, null: false, default: ''
      t.text :notes
      t.string :latitude,  null: false, default: ''
      t.string :longitude, null: false, default: ''

      t.timestamps
    end
  end
end
