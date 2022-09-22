class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :patient, null: false, foreign_key: true
      t.belongs_to :doctor, null: false, foreign_key: true
      t.datetime :appt_date_time
      t.integer :duration
      t.string :appt_reason
      t.text :appt_summary
      t.string :location
      t.text :prescription
      t.integer :rating
      t.integer :total_cost

      t.timestamps
    end
  end
end
