class Doctor < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :patients, through: :appointments


    validates :first_name, :last_name, :address, :state, :city, :zipcode, :email, :specialty, :image_url, :years_experience, :mobile, :university, :hourly_rate, presence: true
    # validates :mobile, length: { is: 10 }
end
