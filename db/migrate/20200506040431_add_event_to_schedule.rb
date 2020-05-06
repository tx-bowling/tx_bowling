class AddEventToSchedule < ActiveRecord::Migration[6.0]
  def change
    remove_column :schedules, :date, :date
    remove_column :schedules, :time, :time
    add_column :schedules, :scheduled_at, :datetime

    add_reference :schedules,:event, foreign_key: true
  end
end
