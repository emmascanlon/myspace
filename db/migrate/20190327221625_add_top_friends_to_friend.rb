class AddTopFriendsToFriend < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :top_friends, :text
  end
end
