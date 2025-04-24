// function handleSearch(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-input");
//   let cityElement = document.querySelector("#city");
//   cityElement.innerHTML = searchInput.value;
// }

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", handleSearch); 


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Accra");