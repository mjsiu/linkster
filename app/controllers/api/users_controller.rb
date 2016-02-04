class Api::UsersController < ApplicationController

  def show
    @user_links = current_user.links
    @user_link_lists = current_user.link_lists
  end

end
