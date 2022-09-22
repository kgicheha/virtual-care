class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :dob, :sex, :health_insurance, :mobile, :email, :password_digest
end
