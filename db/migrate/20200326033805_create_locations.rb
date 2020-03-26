class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :lane_count
      t.boolean :has_restaurant
      t.boolean :has_bar
      t.references :address, null: false, foreign_key: true

      t.timestamps
    end
  end
end
