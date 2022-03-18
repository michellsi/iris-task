class Item < ApplicationRecord
  include PgSearch::Model

  multisearchable against: [:name, :release_date, :stars]

  pg_search_scope :search_by_everything,
    against: [ :name, :release_date, :stars ],
    using: {
      tsearch: { prefix: true }
    }
end
