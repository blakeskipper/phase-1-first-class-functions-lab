const returnFirstTwoDrivers = function(drivers){

return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (someNumber) {
     return function(rideFare) {
        return someNumber * rideFare 
     }

}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers, returnFirstTwoDrivers, returnLastTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}
    
    
    // function functionName(parameter1, parameter2, parameter3) {
    //     // code to be executed
    //   })