# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_25_182717) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.bigint "doctor_id", null: false
    t.datetime "appt_date_time"
    t.integer "duration"
    t.string "appt_reason"
    t.text "appt_summary"
    t.string "location"
    t.text "prescription"
    t.integer "rating"
    t.integer "total_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id"], name: "index_appointments_on_doctor_id"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "address"
    t.string "state"
    t.string "city"
    t.string "zipcode"
    t.string "email"
    t.string "specialty"
    t.string "image_url"
    t.integer "years_experience"
    t.string "mobile"
    t.string "university"
    t.integer "hourly_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rating"
    t.integer "total_reviews"
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "dob"
    t.string "sex"
    t.string "health_insurance"
    t.string "mobile"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "appointments", "doctors"
  add_foreign_key "appointments", "patients"
end
