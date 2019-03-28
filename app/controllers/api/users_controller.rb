class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.random_user(current_user.friend_connections)
  end

  def update
    current_user.friend_connections << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.liked(current_user.friend_connections)
  end
end
