json.extract! user, :id, :username
json.banner_img_url asset_path(user.image.url)
json.comment_ids user.comments.pluck(:id)
