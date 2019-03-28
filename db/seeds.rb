

20.times do
  User.create(
    name: Faker::TvShows::TheFreshPrinceOfBelAir.character, 
    email: Faker::Internet.free_email,
    password: "password",
    image: Faker::Avatar.image('name','300x300', 'png', 'set2')
  )
end

puts "20 users seeded"
