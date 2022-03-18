class Item < ApplicationRecord
  include PgSearch::Model

  multisearchable against: [:name, :owner, :stars]

  pg_search_scope :search_by_everything,
    against: [ :name, :owner, :stars ],
    using: {
      tsearch: { prefix: true }
    }
end
