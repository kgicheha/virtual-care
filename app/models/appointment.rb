class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validates :appt_date_time, :duration, :appt_reason, :location,  presence: true
  validates :location, inclusion: { in: ['In-Person', 'Online'] }
end
