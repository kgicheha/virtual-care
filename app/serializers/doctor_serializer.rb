class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :state, :city, :zipcode, :email, :specialty, :image_url, :years_experience, :mobile, :university, :hourly_rate, :rating, :total_reviews
end
