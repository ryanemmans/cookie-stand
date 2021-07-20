'use strict';
// talk about contextual this tomorrow

'use strict';

// calculate the number of cookies each location must make every day
// The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations)

// Factors unique to each location:
// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// Add and remove locations from daily projections report
// Easily modify input numbers for each location based on day of the week, special events, and other factors

// shop location
// min/max hourly customer
// average cookies per customer

// number of customers per hour

// calculate/store cookies purchased for each hour at each location
// - using average cookies and random # of customers generated

// store results for each location in separate array as property of object representing location

// display values of each array as <ul>

// calculated sum of hourly totals should resemble this:
// Seattle
// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// etc.

// TAKE RANDOM # OF CUSTOMERS, MULTIPLY COOKIE SALES, GET COOKIES PER HOUR
const hourArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookies: 0,
  avgSale: (6.3),
  hour: hourArray,
  total: 0,
  getCookies: function () {
    this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
    console.log(this.cookies);
  }
}

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  cookies: 0,
  avgSale: (1.2),
  hour: hourArray,
  total: 0,
  getCookies: function () {
    this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
    console.log(this.cookies);
  }
}

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  cookies: 0,
  avgSale: (3.7),
  hour: hourArray,
  total: 0,
  getCookies: function () {
    this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
    console.log(this.cookies);
  }
}

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  cookies: 0,
  avgSale: (2.3),
  hour: hourArray,
  total: 0,
  getCookies: function () {
    this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
    console.log(this.cookies);
  }
}

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  cookies: 0,
  avgSale: (4.6),
  hour: hourArray,
  total: 0,
  getCookies: function () {
    this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
    console.log(this.cookies);
  }
}

// create a function that gives us a random customer count
function randomCust(a, b) {
  let cookies = Math.floor(Math.random() * (b - a + 1) + a);
  return cookies;
}

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

seattle.getCookies();
tokyo.getCookies();
dubai.getCookies();
paris.getCookies();
lima.getCookies();

const locArray = [seattle, tokyo, dubai, paris, lima];
const locDivElem = document.getElementById('loc')

// <article>
// <h2></h2>
// <p></p>
// <ul>
// <li></li>
// </ul>
// <img>
// </article>

function renderLoc(loc) {
  console.log(loc);
  let articleElem = document.createElement('article');
  locDivElem.appendChild(articleElem);
  let h3Elem = document.createElement('h3');
  h3Elem.textContent = loc.name;
  articleElem.appendChild(h3Elem);
  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for (let i = 0; i < loc.hour.length; i++) {
    let liElem = document.createElement('li');
    loc.getCookies();
    liElem.textContent = `${loc.hour[i]} ${loc.cookies} cookies`;
    loc.total = loc.total + loc.cookies;
    ulElem.appendChild(liElem)
  }
  let liTotal = document.createElement('li');
  liTotal.textContent = `Total: ${loc.total} cookies`;
  ulElem.appendChild(liTotal)
}

for (let i = 0; i < locArray.length; i++) {
  renderLoc(locArray[i]);
}
