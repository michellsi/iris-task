class ItemsController < ApplicationController
  def index
    if params[:query].present?
      @items = Item.search_by_everything(params[:query])
      @items = Item.order(params[:sort])
    else
      @items = Item.all
      @items = Item.order(params[:sort])
    end
  end
end
