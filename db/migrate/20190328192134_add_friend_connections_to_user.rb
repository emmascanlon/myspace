class AddFriendConnectionsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :friend_connections, :text
  end
end
