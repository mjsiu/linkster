class Api::UsersController < ApplicationController
  def show
  @user_links = current_user.links
end
end
