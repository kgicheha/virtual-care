class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments

    has_secure_password

    validates :first_name, :last_name, :dob, :sex, :health_insurance, :mobile, :email, :password, presence: true
    validates :mobile, length: { is: 10 }
    validates :email, uniqueness: true
    validates :sex, inclusion: { in: ['Male', 'Female'] }
    validates :health_insurance, inclusion: { in: ['United Health', 'Kaiser Foundation', 'Blue Cross Blue Shield', 'Independence Health Group'] }
end


