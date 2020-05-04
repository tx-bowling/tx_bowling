class ChangeEntryCostToEntryFee < ActiveRecord::Migration[6.0]
  def change
    rename_column :tournaments, :entry_cost, :entry_fee
    rename_column :tournaments, :link_to_source, :source_url

    add_column :tournaments, :source_description, :string, { null: true }
  end
end
