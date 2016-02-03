class Api::LinkListsController < ApplicationController

  def index
    @link_lists = LinkList.all
  end

end
