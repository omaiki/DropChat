# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: 'oshoke@oshoke.com', password: 'oshoke')
Chat.create(location: 70, title: 'TestChat')
Message.create(content: "test_content")


# curl -X POST -H "Content-type: application/json" -H "Authorization: 12:cccyXLZ7o_XpK6MxU_Bt" -d '{ "chat": { "title": "Test Title", "location": 70 } }' http://localhost:3000/v1/chats