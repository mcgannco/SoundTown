json.extract! comment, :id, :user_id, :body, :song_id
json.created_at comment.created_at.to_date.to_formatted_s(:long)
