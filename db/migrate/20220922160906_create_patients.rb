class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :dob
      t.string :sex
      t.string :health_insurance
      t.string :mobile
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
