class ItemsController < ApplicationController
  ITEM_PER_PAGE = 5

  def index
    @page = params.fetch(:page, 0).to_i

    if params[:query].present?
      @items = Item.search_by_everything(params[:query]).offset(@page * ITEM_PER_PAGE).limit(ITEM_PER_PAGE).order(params[:sort])
    else
      @items = Item.order(params[:sort])
      @items = Item.offset(@page * ITEM_PER_PAGE).limit(ITEM_PER_PAGE).order(params[:sort])
    end
  end
end
