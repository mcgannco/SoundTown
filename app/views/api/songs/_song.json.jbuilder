json.extract! song, :id, :author_id, :title, :artist_name
json.audio_url asset_path(song.audio.url)
json.comment_ids song.comments.pluck(:id)
json.image_url asset_path(song.image.url)
json.created_at song.created_at.to_date.to_formatted_s(:long)
