class RemoveDurationFromAppointments < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments, :appt_date_time, :datetime
    remove_column :appointments, :duration, :integer
    remove_column :appointments, :appt_reason, :string
    remove_column :appointments, :appt_summary, :text
    remove_column :appointments, :location, :string
    remove_column :appointments, :prescription, :text
    remove_column :appointments, :rating, :integer
    remove_column :appointments, :total_cost, :integer
  end
end
