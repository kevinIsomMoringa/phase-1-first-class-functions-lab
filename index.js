// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(array) {
    return array.slice(0,2)
}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier() {
    return (fare, multiplier=fare) => fare*multiplier
}

function fareDoubler(fare) {
    return createFareMultiplier()(fare, 2)
}

function fareTripler(fare) {
    return createFareMultiplier()(fare, 3)
}

const selectDifferentDrivers = (array,func) => {
    return func(array)
}



// console.log(returnFirstTwoDrivers(drivers))
// console.log(returnLastTwoDrivers(drivers))
// console.log(createFareMultiplier()(5))
// console.log(fareDoubler(23))
// console.log(fareTripler(2))
// console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))
