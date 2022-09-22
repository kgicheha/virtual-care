class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :state
      t.string :city
      t.string :zipcode
      t.string :email
      t.string :specialty
      t.string :image_url
      t.integer :years_experience
      t.string :mobile
      t.string :university
      t.integer :hourly_rate

      t.timestamps
    end
  end
end
