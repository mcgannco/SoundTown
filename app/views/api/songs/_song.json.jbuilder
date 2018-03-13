json.extract! song, :id, :author_id, :title, :artist_name
json.audio_url asset_path(song.audio.url)
json.comment_ids song.comments.pluck(:id)
