# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_name        :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  author_id          :integer          not null
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Song < ApplicationRecord
  validates :title, :artist_name, :author_id, presence: true
  belongs_to :author, class_name: :User

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

end
