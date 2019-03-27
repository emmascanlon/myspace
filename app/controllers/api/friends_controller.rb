class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: User.friends
  end

  def update
    current_user.
  end
end
