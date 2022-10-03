class AppointmentSerializer < ActiveModel::Serializer
  attributes :patient_id, :doctor_id, :title, :startDate, :endDate
  has_one :patient
  has_one :doctor
end
