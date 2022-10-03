class PatientSerializer < ActiveModel::Serializer
  has_many :appointments
  attributes :id, :first_name, :last_name, :dob, :sex, :health_insurance, :mobile, :email, :password_digest
end
