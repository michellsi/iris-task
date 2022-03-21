class ItemsController < ApplicationController
  ITEM_PER_PAGE = 5

  def index
    @page = params.fetch(:page, 0).to_i

    if params[:query].present?
      @items = Item.search_by_everything(params[:query]).order(params[:sort]).offset(@page * ITEM_PER_PAGE).limit(ITEM_PER_PAGE)
    else
      @items = Item.offset(@page * ITEM_PER_PAGE).limit(ITEM_PER_PAGE).order(params[:sort])
    end
  end
end
