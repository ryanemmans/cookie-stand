'use strict';

// ----------------------------------- Global Variables ----------------------------------- //

// I need to get a reference to where on the page I am putting stuff
const tableElem = document.getElementById('sales');
// for hours of operation
const hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// ----------------------------------- Constructor ----------------------------------- //

// minCust, maxCust, avgCookiePerSale, locationName
function Store(minCust, maxCust, avgCookiePerSale, name) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.salesHourly = [];

  Store.allStores.push(this)
}

// ----------------------------------- constructor related stuff ----------------------------------- //

Store.allStores = [];
// getting random customer
Store.prototype.randomCustInRange = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}
// calculates sale per hour based on rand cust
Store.prototype.calculateSalesPerHour = function () {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const thisHourSale = Math.ceil(this.randomCustInRange() * this.avgCookiePerSale)
    this.salesHourly.push(thisHourSale);
  }
}
// prototype method for render()
// create a row, insert a th with the location name, insert salesHourly array values as td's, insert a th with grand total
Store.prototype.renderStore = function (bodyElem) {
  let grandTotal = 0;
  const rowElem = document.createElement('tr');
  bodyElem.appendChild(rowElem);
  const locationThElem = document.createElement('th');
  locationThElem.textContent = this.name;
  rowElem.appendChild(locationThElem);
  for (let i = 0; i < this.salesHourly.length; i++) {
    const hourlyTotal = this.salesHourly[i]
    const tdElem = document.createElement('td');
    tdElem.textContent = hourlyTotal;
    grandTotal += hourlyTotal;
    rowElem.appendChild(tdElem);
  }
  const grandTotalThElem = document.createElement('td');
  grandTotalThElem.textContent = grandTotal;
  rowElem.appendChild(grandTotalThElem);
}

// ----------------------------------- Global Functions ----------------------------------- 

// makes elements and adds them to the DOM
function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}

// renders header
function renderHeader() {
  const headerElem = makeElement('thead', tableElem, null);
  const rowElem = makeElement('tr', headerElem, null);
  makeElement('th', rowElem, null);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    makeElement('th', rowElem, hoursOfOperation[i]);
  }
  makeElement('th', rowElem, 'Daily Location Total');
}

// loops through and renders all locations - maybe make a tbody??
function rendersAllStores() {
  // create the tbody and append it to the table
  const bodyElem = makeElement('tbody', tableElem, null)
  for (let i = 0; i < Store.allStores.length; i++) {
    let currentStore = Store.allStores[i];
    currentStore.calculateSalesPerHour();
    currentStore.renderStore(bodyElem);
  }
}
// renders footer
function renderFooter() {
  // make tfoot element - give it a variable
  // append tfoot to table
  const footerElem = makeElement('tfoot', tableElem, null);
  // make a row - append row to tfoot
  const rowElem = makeElement('tr', footerElem, null);
  // hourly total - make a variable
  let hourlyTotal = 0;
  // table grand total
  let grandTotal = 0;
  makeElement('th', rowElem, 'Hourly Totals:');
  // first access the hour
  for (let i = 0; i < hoursOfOperation.length; i++) {
    // then look at the store (each store) at that hour
    for (let j = 0; j < Store.allStores.length; j++) {
      // get the store at the hours value and add it to hourly total
      let storesSalesAtHour = Store.allStores[j].salesHourly[i];
      hourlyTotal += storesSalesAtHour;
    }
    // add cell to row
    makeElement('td', rowElem, hourlyTotal);
    // add hourly total to grand total
    grandTotal += hourlyTotal;
    // have to reset hourly total once we are done adding data to the table
    hourlyTotal = 0;
  }
  // add grand total to footer as last cell
  makeElement('td', rowElem, grandTotal);
}

// ----------------------------------- Call Functions ----------------------------------- //

const seattle = new Store(23, 65, 6.3, 'Seattle');
const tokyo = new Store(3, 24, 1.2, 'Tokyo');
const dubai = new Store(11, 38, 3.7, 'Dubai');
const paris = new Store(20, 38, 2.3, 'Paris');
const lima = new Store(2, 16, 4.6, 'Lima');

renderHeader();
rendersAllStores();
renderFooter();

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
console.log(tableElem);