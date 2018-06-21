# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# (1..2).each do |i|
#   Page.create!(title: "Public Page #{i}", content: "Public content #{i}", allow_unauth: true) rescue nil
#   Page.create!(title: "Private Page #{i}", content: "Super secret content #{i}", allow_unauth: false) rescue nil
# end


#events table seed
#------------------
#
# 50.times do
#   Event.create({
#     title: Faker::Hipster.sentence(5),
#     url: Faker::Internet.url,
#     event_type: ["tables", "festival", "meetup", "party", "club", "live"].sample,
#     state: Faker::Address.state,
#     city: Faker::Address.city,
#     street: Faker::Address.street_name,
#     street_num: Faker::Address.building_number,
#     start_date_time: Faker::Time.forward(30, :evening),
#     end_date_time: Faker::Time.forward(60, :morning),
#     age_limit: Random.rand(18..30),
#     privacy: Random.new.rand(0..1),
#     croud_selection: Random.new.rand(0..1),
#     body_heb: "",
#     body_eng: Faker::Hipster.paragraph(2, false, 4),
#     allow_unauth: true,
#     owner_id: Random.rand(1..50),
#     event_password: Faker::Internet.password(10, 20, true),
#   })
# end

#users table seed
#------------------
#
User.create!(
    first_name: "Hadar",
    last_name: "Schindler",
    official_id: "064553729",
    age: "34",
    ticket_token: SecureRandom.hex.to_s,
    role: "administrator",
    phone: "0507470470",
    fb_profile_url: "http://www.facebook.com/" + "hadar",
    email: "hadar.schindler@example.com",
    password: "1234567890",
  )
50.times do
  firstname = Faker::Name.first_name
  User.create({
    first_name: firstname,
    last_name: Faker::Name.last_name,
    official_id: Faker::IDNumber.valid.gsub("-", ""),
    age: rand(23..40).to_s,
    ticket_token: SecureRandom.hex.to_s,
    role: ["manager", "promoter", "promoter", "customer", "customer", "customer", "customer", "customer"].sample,
    phone: ["050", "054", "052", "055"].sample + rand(1111..9999).to_s + rand(111..999).to_s,
    fb_profile_url: "http://www.facebook.com/" + firstname.downcase,
    email: Faker::Internet.safe_email(firstname),
    password: rand(111111111..999999999).to_s,
  })
end