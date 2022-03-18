class ChangeItemsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :items, :stars
    remove_column :items, :release_date
    add_column :items, :owner, :string
    add_column :items, :stars, :integer
  end
end
