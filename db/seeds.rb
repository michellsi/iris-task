require "faker"

modules = ["npm", "faker", "yarn", "faker-import", "angular-jsf", "react-modal", "react-bootstrap-master", "bootstrap", "fontawesome",
           "jQuery", "reveal.js", "chartjs", "rails-turbolinks", "websocket-rails", "sql-parser", "json5", "angular-xml", "react", "javascript",
           "bokeh", "linux", "ng-csv", "font-awesome-sass", "vue", "lodash", "stimulus", "clipboard", "mocha", "prism", "redux"]

30.times do
  Item.create!(name: modules.shuffle!.pop, release_date: Faker::Internet.username, stars: Faker::Number.between(from: 1, to: 500))
end
