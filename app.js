const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
};
const displayCountries = countries => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }

  const countriesContainer = document.getElementById("countries-container");
  countries.forEach(country => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country-card");
    countryDiv.innerHTML = `
    <h3>Name:${country.name.common}</h3>
    <p>Capital: ${country.capital}</p>
    <button onclick="loadCountryDetails('${country.cca2}')">Display Details</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};
const loadCountryDetails = code => {
  //   console.log(code, "get Country Details");
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  //   console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
};
const displayCountryDetails = country => {
  document.getElementById("country-details").innerHTML = `
  <h2>Name:${country.name.common}</h2>
  <img src="${country.flags.png}"/>
  `;
};
loadCountries();
