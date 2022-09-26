# require 'faker'

puts "Deleting DB.."
Patient.destroy_all
Doctor.destroy_all
Appointment.destroy_all

puts "Seeding Patient"

p1 = Patient.create(first_name: "testing", last_name: "testing", dob: "O1/01/0101", sex: "Male", health_insurance: "Kaiser Foundation", mobile: "1111111111", email: "testing@gmail.com", password: "testing");

puts "Done Seeding Patient"

puts "Seeding Doctor"
special = ["Therapist", "Family Physician", "Emergency Physician", "Psychiatrist", "Neurologist", "Pediatrician",  "Cardiologist"]
uni = ["University of Delaware", "Harvard Medical School", "New York University", "Columbia University", "Johns Hopkins University", "University of California--San Francisco"]
100.times do

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
5.times do
    Appointment.create(patient_id: p1.id, doctor_id: 1, appt_date_time: DateTime.now - (rand * 21), duration: rand(1...3), appt_reason: "Lorem ipsum dolor sit amet", appt_summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", location: loc.sample, prescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", rating: rand(3.5...5), total_cost: rand(30...1000)
    )
end
puts "Done Seeding Appointments"
