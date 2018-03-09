class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :artist_name, null: false

      t.timestamps
    end
  end
end
