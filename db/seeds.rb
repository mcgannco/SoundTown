# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  User.destroy_all
  demo_user = User.create(username: "DemoUser", password: "123456")

  Song.destroy_all
  # demo_song = Song.create({title: "SongTitle", artist_name: "SongArtist", author_id: demo_user.id})
  # demo_song2 = Song.create({title: "SongTitle2", artist_name: "SongArtist2", author_id: demo_user.id})
