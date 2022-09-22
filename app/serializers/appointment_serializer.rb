class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_date, :appt_time, :duration, :appt_reason, :appt_summary, :location, :prescription, :rating, :total_cost
  has_one :patient
  has_one :doctor
end
