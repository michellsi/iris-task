const button = document.querySelector('button.search-btn');

button.addEventListener('submit', (e) => {
  const clickedButton = e.currentTarget;
  console.log(clickedButton);
});

// fetch - Bower

const bowerSearch = (searchTerm) => {
    const url = `https://libraries.io/api/bower-search?q=${searchTerm}`;
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      // print the JSON response
      console.log(json);

      // break into the JSON to find the pieces we need
      const results = json.slice(0, 5);
      results.forEach((result) => {
        console.log(result.name);
        console.log(result.latest_release_number);
        console.log(result.stars);
        // build a little HTML snippet using the info we found
        const html = `
        <tr>
          <td>${result.name}</td>
          <td>${result.latest_release_number}</td>
          <td>${result.stars}</td>
        </tr>
        `;

        const list = document.querySelector('#results');
        // insert the snippet into the existing DOM on the page
        list.insertAdjacentHTML('beforeend', html);
      });
    });
};

// Setup the form's event listener
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', (event) => {
  // Stop the default behavior: reload the page/navigate!
  event.preventDefault();
  // get the input from the form
  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value;
  // search for that input with the API

  // clear the current contents!
  const list = document.querySelector('#results');
  list.innerHTML = '';

  bowerSearch(searchTerm);
});
