class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :release_date
      t.string :stars

      t.timestamps
    end
  end
end
