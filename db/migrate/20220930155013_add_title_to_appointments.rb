class AddTitleToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :title, :string
    add_column :appointments, :startDate, :string
    add_column :appointments, :endDate, :string
  end
end
