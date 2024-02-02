const names = [
  "Tom",
  "Jerry",
  "Connor",
  "June",
  "Carl",
  "Neekohlas",
  "Dr. Skipper",
  "Chesty Puller",
  "Dr. Thunder",
];
const prices = [30, 60, 70, 140, 20, 90, 10, 230];
const occupations = [
  "Cat",
  "Mouse",
  "Laywer",
  "Doctor",
  "Stripper",
  "Starving Child",
  "Offbrand Soda",
  "Elephant Dentist",
  "Walmart Soda",
];
const state = {
  persons: [
    { names: "Nick", occupations: "Boss", prices: 50 },
    { names: "Charles", occupations: "Servant", prices: 30 },
  ],
  average: 0,
};
const maxPersons = 11;

function selectRandomElement(persons) {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];
  state.persons.push({
    names: randomName,
    occupations: randomOccupation,
    prices: randomPrice,
  });
}

function updateAveragePrice(state) {
  const total = state.persons.reduce((acc, person) => acc + person.prices, 0);
  state.average = total / state.persons.length;
}

function renderFreelancers(persons) {
  const $persons = persons.map((person) => {
    const $tr = document.createElement("tr");
    $tr.innerHTML = `<td>${person.names}</td>
      <td>${person.occupations}</td>
      <td>${person.prices}</td>`;
    return $tr;
  });

  const $td = document.querySelector("#people");
  $td.replaceChildren(...$persons);
}
function render(state) {
  renderFreelancers(state.persons);
}

function renderAveragePrices(price) {
  const $prices = document.querySelector(".average_price");
  $prices.innerHTML = `<span>$${price.toFixed(2)}</span>`;
}

function render(state) {
  renderFreelancers(state.persons);
  renderAveragePrices(state.average);
}

const addFreelancerInterval = setInterval(function () {
  selectRandomElement(state);
  if (state.persons.length >= maxPersons) {
    clearInterval(addFreelancerInterval);

    setTimeout(() => alert("Too many freelancers! STAAAAAHHHPPP!!!"), 1000);
  }
  updateAveragePrice(state);
  render(state);
}, 2000);
