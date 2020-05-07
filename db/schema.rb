# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_06_040431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street_address", default: "", null: false
    t.string "secondary_address", default: "", null: false
    t.string "city", default: "", null: false
    t.string "state", default: "", null: false
    t.string "zip_code", default: "", null: false
    t.text "notes"
    t.string "latitude", default: "", null: false
    t.string "longitude", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_events_on_name", unique: true
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.integer "lane_count", default: 0, null: false
    t.boolean "has_restaurant", default: false, null: false
    t.boolean "has_bar", default: false, null: false
    t.bigint "address_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["address_id"], name: "index_locations_on_address_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.string "event"
    t.bigint "tournament_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "scheduled_at"
    t.bigint "event_id"
    t.index ["event_id"], name: "index_schedules_on_event_id"
    t.index ["tournament_id"], name: "index_schedules_on_tournament_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "location_id", null: false
    t.integer "entry_fee", default: 0, null: false
    t.string "side_pots_available"
    t.string "source_url"
    t.string "flier"
    t.bigint "contact_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "source_description"
    t.index ["contact_id"], name: "index_tournaments_on_contact_id"
    t.index ["location_id"], name: "index_tournaments_on_location_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.boolean "admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "locations", "addresses"
  add_foreign_key "schedules", "events"
  add_foreign_key "schedules", "tournaments"
  add_foreign_key "tournaments", "locations"
  add_foreign_key "tournaments", "users", column: "contact_id"
end
