# require 'faker'

puts "Deleting DB.."
Patient.destroy_all
Doctor.destroy_all
Appointment.destroy_all

puts "Seeding Patient"

p1 = Patient.create(first_name: "testing", last_name: "testing", dob: "O1/01/0101", sex: "Male", health_insurance: "Kaiser Foundation", mobile: "1111111111", email: "testing@gmail.com", password: "testing");

puts "Done Seeding Patient"

puts "Seeding Doctor"
special = ["Therapist", "Family Doctor", "Dentist", "Eye Doctor", "Dermatologist", "Pediatrician",  "Cardiologist"]
uni = ["University of Delaware", "Harvard Medical School", "New York University", "Columbia University", "Johns Hopkins University", "University of California--San Francisco"]
150.times do

    Doctor.create(
        first_name: Faker::Name.first_name , last_name: Faker::Name.last_name,
        address: Faker::Address.street_address, state: Faker::Address.state_abbr ,
        city: Faker::Address.city,  zipcode: Faker::Address.zip_code ,
        email: Faker::Internet.email ,
        specialty: special.sample,
        image_url: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        years_experience: rand(1...35), mobile: Faker::PhoneNumber.cell_phone,
         university: uni.sample ,
        hourly_rate: rand(30...150), rating: rand(3...5), total_reviews: rand(3...1000)
        )
end

puts "Done Seeding Doctor"

loc = ['In-Person', 'Online']
puts "Seeding Appointments"

a1= Appointment.create(patient_id: p1.id, doctor_id: 1, title: "Therapy", startDate: "2022-09-25T10:00", endDate: "2022-09-25T12:00")
a2= Appointment.create(patient_id: p1.id, doctor_id: 1, title: "Therapy", startDate: "2022-09-26T10:00", endDate: "2022-09-26T12:00")
a3= Appointment.create(patient_id: p1.id, doctor_id: 1, title: "Therapy", startDate: "2022-09-27T10:00", endDate: "2022-09-27T12:00")
a4= Appointment.create(patient_id: p1.id, doctor_id: 1, title: "Therapy", startDate: "2022-09-28T10:00", endDate: "2022-09-28T12:00")
a5= Appointment.create(patient_id: p1.id, doctor_id: 1, title: "Therapy", startDate: "2022-09-29T10:00", endDate: "2022-09-29T12:00")

puts "Done Seeding Appointments"
