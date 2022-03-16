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


function table_sort() {
  const styleSheet = document.createElement('style')
  styleSheet.innerHTML = `
        .order-inactive span {
            visibility:hidden;
        }
        .order-inactive:hover span {
            visibility:visible;
        }
        .order-active span {
            visibility: visible;
        }
    `
  document.head.appendChild(styleSheet)

  document.querySelectorAll('th.order').forEach(th_elem => {
    let asc = true
    const span_elem = document.createElement('span')
    span_elem.style = "font-size:0.8rem; margin-left:0.5rem"
    span_elem.innerHTML = "▼"
    th_elem.appendChild(span_elem)
    th_elem.classList.add('order-inactive')

    const index = Array.from(th_elem.parentNode.children).indexOf(th_elem)
    th_elem.addEventListener('click', (e) => {
      document.querySelectorAll('th.order').forEach(elem => {
        elem.classList.remove('order-active')
        elem.classList.add('order-inactive')
      })
      th_elem.classList.remove('order-inactive')
      th_elem.classList.add('order-active')


      if (!asc) {
        th_elem.querySelector('span').innerHTML = '▲'
      } else {
        th_elem.querySelector('span').innerHTML = '▼'
      }
      const arr = Array.from(th_elem.closest("table").querySelectorAll('tbody tr'))
      arr.sort((a, b) => {
        let a_val = a.children[index].innerText
        let b_val = b.children[index].innerText
        return (asc) ? a_val.localeCompare(b_val, 'en', {numeric: true}) : b_val.localeCompare(a_val, 'en', {numeric: true})
      })
      arr.forEach(elem => {
        th_elem.closest("table").querySelector("tbody").appendChild(elem)
      })
      asc = !asc
    })
  })
}

table_sort()
