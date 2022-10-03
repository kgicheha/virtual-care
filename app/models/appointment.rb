class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validates :title, :startDate, :endDate,  presence: true
end

