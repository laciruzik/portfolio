document.addEventListener("DOMContentLoaded", function () {
  let countriesList = document.getElementById("countries");
  let countries;
  countriesList.addEventListener("change", newCountrySelection);
  function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
  }
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log("Error:", err));

  function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    countries.forEach(
      (country) =>
        (options += `<option value="${country.cca3}">${country.name.official}</option>`)
    );

    countriesList.innerHTML = options;
    console.log(countriesList);
    countriesList.selectedIndex = 230;

    let info = document.getElementById("info");
    info.addEventListener("click", showWiki);
    function showWiki() {
      window.open(
        `https://en.wikipedia.org/wiki/${
          countriesList[countriesList.selectedIndex].innerHTML
        }`
      );
    }

    let map = document.getElementById("map");
    map.addEventListener("click", showMap);
    function showMap() {
      window.open(
        `https://www.google.com/maps/place/${
          countriesList[countriesList.selectedIndex].innerHTML
        }`
      );
    }

    displayCountryInfo(countriesList[countriesList.selectedIndex].value);
  }

  function displayCountryInfo(cca3Code) {
    let countryData = countries.find((country) => country.cca3 === cca3Code);
    document.querySelector("#flag-container img").src = countryData.flags.svg;
    document.querySelector(
      "#flag-container img"
    ).alt = `Flag of ${countryData.flags.alt}`;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML =
      countryData.population.toLocaleString("en-SK");
    document.getElementById("currencies").innerHTML = Object.values(
      countryData.currencies
    )
      .map((x) => x.name)
      .join(", ");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    document.getElementById("car-sign").innerHTML = countryData.car.signs;
    document.getElementById("side").innerHTML = countryData.car.side;
    document.getElementById("timezones").innerHTML =
      countryData.timezones.join(", ");
    document.getElementById("languages").innerHTML = Object.values(
      countryData.languages
    ).join(", ");
    let borders = countryData.borders
      ? countryData.borders
          .map((border) =>
            countries.map((y) =>
              y.cca3 === border ? (border = y.name.official) : ""
            )
          )
          .map((x) => x.filter((y) => y !== ""))
          .flat()
          .join(", ")
      : " - ";
    document.getElementById("borders").innerHTML = borders;
  }
});
