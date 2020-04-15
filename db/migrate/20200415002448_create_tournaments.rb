class CreateTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :tournaments do |t|
      t.string :name, null: false, default: ''
      t.references :location, null: false, foreign_key: true
      t.integer :entry_cost, null: false, default: 0
      t.string :side_pots_available
      t.string :link_to_source
      t.string :flier
      t.references :contact, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
