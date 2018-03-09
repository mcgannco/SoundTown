class AddUserIdToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :author_id, :integer, null: false
  end
end
