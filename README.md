# SoundTown

SoundTown is a web application for sharing and listening to music. It was inspired by SoundCloud and built using Ruby on Rails, React, Redux and Javascript. This project is under active development and new features will continue to be added.

Explore and Listen at http://soundtown.herokuapp.com/#/.

## Features

Account creation with back and front-end authentication using BCrypt
  * Users can create acounts as well as log in /out
  * Uploads / comments are displayed on user profile pages, both can be directly viewed or deleted by the respective user

Upload songs and album images
  * Upload songs with title, artist name and an album cover image

Continuous audio playback that follows you throughout the site
  * Ability to play/pause songs from anywhere on the site
  * Song continually plays when you move to a different page
  * Ability to adjust volume / current time position in the song

Comment on tracks
  * Users can comment on any track, and delete and of their own comments on any given track

# Continuous Audio Playback:

SoundTown has a custom built audio player which built off of HTML 5s audio tag. The audio player is built in sync with other custom built audio players throughout the site, by transfering the audio's play / pause state through the redux state.

# Comments:

# Future Features:
