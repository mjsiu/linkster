class Api::LinkListsController < ApplicationController

  def index
    @link_lists = LinkList.all
  end

  def show
    @link_list = LinkList.find(params[:id])
  end

end
