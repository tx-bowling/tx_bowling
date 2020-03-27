# frozen_string_literal: true

class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name,              null: false, default: ''
      t.integer :lane_count,       null: false, default: 0
      t.boolean :has_restaurant,   null: false, default: false
      t.boolean :has_bar,          null: false, default: false
      t.references :address, null: false, foreign_key: true

      t.timestamps
    end
  end
end
