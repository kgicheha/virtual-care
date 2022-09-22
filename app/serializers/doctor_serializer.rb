class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :zipcode, :email, :specialty, :image_url, :years_experience, :mobile, :university, :hourly_rate
end
