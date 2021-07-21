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

const hourArray = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00am: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: '];

function Location(name, minCust, maxCust, avgSale, hour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hour = hour;
  this.cookies = 0;
  this.total = 0;
}

Location.locArray = [];

Location.prototype.getCookies = function () {
  this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
  // console.log(this.cookies);
}

const seattle = new Location('Seattle', 23, 65, 6.3, hourArray);
const tokyo = new Location('Tokyo', 3, 24, 1.2, hourArray);
const dubai = new Location('Dubai', 11, 38, 3.7, hourArray);
const paris = new Location('Paris', 20, 38, 2.3, hourArray);
const lima = new Location('Lima', 2, 16, 4.6, hourArray);

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

function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}

function renderLoc() {
  let articleElem = document.createElement('article');
  locDivElem.appendChild(articleElem);

  const tableElem = makeElement('table', articleElem, null);
  const row1Elem = makeElement('tr', tableElem, null);
  makeElement('th', row1Elem, '');
  for (let i = 0; i < hourArray.length; i++) {
    makeElement('th', row1Elem, hourArray[i]);
  }
  makeElement('th', row1Elem, 'Daily Location Total');

  const row2Elem = makeElement('tr', tableElem, null);
  // for (let i = 0; i < locArray.length; i++) {
  let rowElem = makeElement('tr', tableElem)
  makeElement('td', rowElem, locArray[0].name);
  //   for (let i = 0; i < hourArray.length; i++) {
  makeElement('td', rowElem, loc.cookies);
}

// const row3Elem = makeElement('tr', tableElem, null);
// // for (let i = 0; i < locArray.length; i++) {
// let row = makeElement('tr', tableElem)
// makeElement('td', row, locArray[1].name);

// const row4Elem = makeElement('tr', tableElem, null);
// // for (let i = 0; i < locArray.length; i++) {
// let row = makeElement('tr', tableElem)
// makeElement('td', row, locArray[2].name);

// const row5Elem = makeElement('tr', tableElem, null);
// // for (let i = 0; i < locArray.length; i++) {
// let row = makeElement('tr', tableElem)
// makeElement('td', row, locArray[3].name);

// const row6Elem = makeElement('tr', tableElem, null);
// // for (let i = 0; i < locArray.length; i++) {
// let row = makeElement('tr', tableElem)
// makeElement('td', row, locArray[4].name);

// const row7Elem = makeElement('tr', tableElem, null);
//   // for (let i = 0; i < locArray.length; i++) {
//     let row = makeElement('tr', tableElem)
//     makeElement('td', row, locArray[0].name);

renderLoc();

let liTotal = document.createElement('li');
liTotal.textContent = `Total: ${loc.total} cookies`;

// get random values for each hour (efficient way?)
// put in footer row for all totals


// --------------- OLD CODE ---------------

// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   cookies: 0,
//   avgSale: (6.3),
//   hour: hourArray,
//   total: 0,
//   getCookies: function () {
//     this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
//     console.log(this.cookies);
//   }
// }

// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   cookies: 0,
//   avgSale: (1.2),
//   hour: hourArray,
//   total: 0,
//   getCookies: function () {
//     this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
//     console.log(this.cookies);
//   }
// }

// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   cookies: 0,
//   avgSale: (3.7),
//   hour: hourArray,
//   total: 0,
//   getCookies: function () {
//     this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
//     console.log(this.cookies);
//   }
// }

// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   cookies: 0,
//   avgSale: (2.3),
//   hour: hourArray,
//   total: 0,
//   getCookies: function () {
//     this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
//     console.log(this.cookies);
//   }
// }

// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   cookies: 0,
//   avgSale: (4.6),
//   hour: hourArray,
//   total: 0,
//   getCookies: function () {
//     this.cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgSale)
//     console.log(this.cookies);
//   }
// }

// let h3Elem = document.createElement('h3');
  // h3Elem.textContent = loc.name;
  // articleElem.appendChild(h3Elem);

  // let ulElem = document.createElement('ul');
  // articleElem.appendChild(ulElem);
