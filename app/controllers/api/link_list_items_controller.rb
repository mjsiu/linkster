class Api::LinkListItemsController < ApplicationController

  def show
    @link_list_items = LinkList.find(params[:id]).link_list_items
  end

end
