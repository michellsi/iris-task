class PagesController < ApplicationController
  def home
    @items = Item.all

    if params[:query].present?
      @items = Item.search_by_everything(params[:query])
    else
      @items = Item.all
    end
  end
end
