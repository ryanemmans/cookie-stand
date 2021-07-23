'use strict';

// -------------------------------- Global Variables -------------------------------- //

const tableElem = document.getElementById('sales');
const formElem = document.getElementById('addStoreForm');
const hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// -------------------------------- Constructor Functions-------------------------------- //

function Store(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.salesHourly = [];

  Store.allStores.push(this);
}

// -------------------------------- Prototype Methods -------------------------------- //

Store.allStores = [];

Store.prototype.randomCustInRange = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}
Store.prototype.calculateSalesPerHour = function () {
  this.salesHourly = [];
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const thisHourSale = Math.ceil(this.randomCustInRange() * this.avgCookiePerSale)
    this.salesHourly.push(thisHourSale);
  }
}

Store.prototype.render = function (tBodyElem) {
  let grandTotal = 0;
  const rowElem = document.createElement('tr');
  tBodyElem.appendChild(rowElem);
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

// -------------------------------- Global Functions -------------------------------- //

function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}

function renderHeader() {
  const headerElem = makeElement('thead', tableElem, null);
  const rowElem = makeElement('tr', headerElem, null);
  makeElement('th', rowElem, null);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    makeElement('th', rowElem, hoursOfOperation[i]);
  }
  makeElement('th', rowElem, 'Daily Location Total');
}

function rendersAllStores() {
  const tBodyElem = makeElement('tbody', tableElem, null)
  for (let i = 0; i < Store.allStores.length; i++) {
    let currentStore = Store.allStores[i];
    currentStore.calculateSalesPerHour();
    currentStore.render(tBodyElem);
  }
}

function renderFooter() {
  const footerElem = makeElement('tfoot', tableElem, null);
  const rowElem = makeElement('tr', footerElem, null);
  let hourlyTotal = 0;
  let grandTotal = 0;
  makeElement('th', rowElem, 'Hourly Totals:');
  for (let i = 0; i < hoursOfOperation.length; i++) {
    for (let j = 0; j < Store.allStores.length; j++) {
      let storesSalesAtHour = Store.allStores[j].salesHourly[i];
      hourlyTotal += storesSalesAtHour;
    }
    makeElement('td', rowElem, hourlyTotal);
    grandTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  makeElement('td', rowElem, grandTotal);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  let name = e.target.location.value;
  let minCust = e.target.minCust.value;
  let maxCust = e.target.maxCust.value;
  let avgCookiePerSale = e.target.avgCookiePerSale.value;

  let newStore = new Store(name, minCust, maxCust, avgCookiePerSale);
  newStore.randomCustInRange();
  newStore.calculateSalesPerHour();

  tableElem.innerHTML = '';
  renderHeader();
  rendersAllStores();
  renderFooter();

  e.target.reset();
}
// -------------------------------- Add Event Listeners -------------------------------- //

formElem.addEventListener('submit', handleSubmit);

// -------------------------------- Call Functions -------------------------------- //

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);

renderHeader();
rendersAllStores();
renderFooter();

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
// console.log(tableElem);

