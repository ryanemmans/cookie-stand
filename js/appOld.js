'use strict';
// talk about contextual this tomorrow

'use strict';

// calculate the number of cookies each location must make every day
// The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations)

// Add and remove locations from daily projections report
// Easily modify input numbers for each location based on day of the week, special events, and other factors

// shop location
// min/max hourly customer
// average cookies per customer
// number of customers per hour

// calculate/store cookies purchased for each hour at each location
// - using average cookies and random # of customers generated

// store results for each location in separate array as property of object representing location

const hourArray = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00am: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: '];
const locArray = [];

function Location(name, minCust, maxCust, avgSale, hour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hour = hour;
  this.cookies = [];
  this.total = 0;
  locArray.push(this)
}

Location.prototype.randomCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}

Location.prototype.cookiesPerHour = function () {
  for (let i = 0; i < hourArray.length; i++) {
    let sales = Math.floor(this.avgSale * this.randomCust());
    this.cookies.push(sales);
    this.total = this.total + sales;
  }
}

const salesDivElem = document.getElementById('sales');
let articleElem = document.createElement('article');

// Wrap in a function for header

function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}

let tableElem = makeElement('table', articleElem, null);
salesDivElem.appendChild(articleElem);
articleElem.appendChild(tableElem);

function tableHeader() {
  const tableHeaderElem = makeElement('thead', tableElem, null);
  makeElement('th', tableHeaderElem, '');
  for (let i = 0; i < hourArray.length; i++) {
    makeElement('th', tableHeaderElem, hourArray[i]);
  }
  makeElement('th', tableHeaderElem, 'Daily Location Total');
  salesDivElem.appendChild(articleElem);
  articleElem.appendChild(tableElem);
}

tableHeader();

Location.prototype.render = function () {
  this.cookiesPerHour();
  const rowElem = makeElement('tr', tableElem, null);
  makeElement('td', rowElem, this.name);
  for (let i = 0; i < this.cookies.length; i++) {
    const td = makeElement('td', rowElem, this.cookies[i]);
    rowElem.appendChild(td);
  }
  makeElement('td', rowElem, this.total);
  tableElem.appendChild(rowElem);
}

const seattle = new Location('Seattle', 23, 65, 6.3, hourArray);
const tokyo = new Location('Tokyo', 3, 24, 1.2, hourArray);
const dubai = new Location('Dubai', 11, 38, 3.7, hourArray);
const paris = new Location('Paris', 20, 38, 2.3, hourArray);
const lima = new Location('Lima', 2, 16, 4.6, hourArray);

// create a function that gives us a random customer count

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function tableFooter() {
const footerElem = makeElement('tr', tableElem, null);
makeElement('td', footerElem, 'Totals:');
}

tableFooter();


// call render function for header
// total is nested for loop

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
