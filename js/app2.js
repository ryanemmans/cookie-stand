'use strict';

// ----------------------------------- Global Variables ----------------------------------- //
// I need to get a reference to where on the page I am putting stuff
const tableElem = document.getElementById('sales');
// for hours of operation
const HoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];






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
// getting random customer
Store.prototype.randomCustInRange = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}
// calculates sale per hour based on rand cust
Store.prototype.calculateSalesPerHour = function () {
  for (let i = 0; i < HoursOfOperation.length; i++) {
    const thisHourSale = Math.ceil(this.randomCustInRange() * this.avgCookiePerSale)
    this.salesHourly.push(thisHourSale);
  }  
}
// prototype method for render()
// create a row, insert a th with the location name, insert salesHourly array values as td's, insert a th with grand total
Store.prototype.renderStore = function(bodyElem) {
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
  const grandTotalThElem = document.createElement('th');
    tdElem.textContent = grandTotal;
    rowElem.appendChild(grandTotalThElem);
}






// ----------------------------------- Global Functions ----------------------------------- 
function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}

// renders header
function renderHeader(){
  const headerElem = makeElement('thead', tableElem, null);
  const rowElem = makeElement('tr', headerElem, null);
  makeElement('td', rowElem, null);
  for (let i =0; i < HoursOfOperation.length; i++);
}

// loops through and renders all locations - maybe make a tbody??
function rendersAllStores() {
  // create the tbody and append it to the table
  const bodyElem = makeElement('tbody', tableElem, null)
  for (let i = 0; i < Store.allStores.length; i ++) {
    let currentStore = Store.allStores[i];
    currentStore.calculateSalesPerHour();
    currentStore.renderStore(bodyElem);
  }
}
// renders footer







// ----------------------------------- Call Functions ----------------------------------- //

const seattle = new Store(23, 65, 6.3, 'Seattle')
const tokyo = new Store(3, 24, 1.2, 'Tokyo')
const lima = new Store(2, 16, 4.6, 'Lima')


renderHeader();
rendersAllStores();

