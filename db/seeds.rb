# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  title_count = 2 + rand(4)
  content_count = 5 + rand(5)
  Post.create(
      title: Faker::Lorem.sentence(title_count),
      content: Faker::Lorem.paragraph(content_count)
  )
end