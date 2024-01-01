//Unit 4 Challenge - Console Finances

var finances = [ //financial dataset already provided, containing arrays with two elements each, Date and Profit/Losses
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


//Print table head

console.log("Financial Analysis");
console.log("------------------");


//Total number of months included in the datasheet calculation

var monthsIncluded = finances.length; //define variable for finances length (not mandatory for this step as we could use finances.lenght straight into console.log, but months.Included variable will be used later in the calculations)

console.log("Total months: " + monthsIncluded); //print total months included in the data sheet


//The net total amount of Profit/Loses calculation

var sum = 0; //define sum variable

for (var i = 0; i < finances.length; i++) { //loop through the multidimensional array elements
  //for (var j = 0; j < finances[i].length; j++) { //loop through each array inside the multidimensional array
    //var element = finances[i][j]; 
    //if (typeof element === "number") { // Select the number element inside each array in the multidimensional array
      sum += finances[i][1]; //add each number element inside the multidimensional array
    //}
  //}
}

console.log("Total: $" + sum); //Net total amount printed in the console


//Average of changes in Profit/Loses over the entire period

var changes = 0; //define total changes variable

for (var i = 1; i < finances.length; i++) { //loop through the multidimensional array
  var monthlyProfit = finances[i][1]; //define current month profit variable inside multidimensional array and selecting the second element in the array
  var monthlyProfitPrevious = finances[i - 1][1];//define previous month profit variable inside multidimensional array and selecting the second element in the array
  var monthlyChanges = monthlyProfit - monthlyProfitPrevious; //define changes variable by substracting previous month profit from current month profit
  changes += monthlyChanges; //sum all monthly changes
}

averageChange = changes/(monthsIncluded-1); //calculate the average monthly profit by dividing the sum of all monthly changes by the number of total months -1 

console.log("Average Change:", averageChange.toFixed(2)); //display answer in console rounded up to 2 decimals


//Greatest increase in Profits/Losses (date and difference) over the entire period

var greatestIncrease = 0; //define a variable for greatest increase to be displayed in console
var greatestIncreaseMonth; //define a variable for the greatest increase month to be diplayed in console

for (var i = 1; i < finances.length; i++) { //same logic as per average of changes calculations above
  var monthlyProfit = finances[i][1];
  var monthlyProfitPrevious = finances[i - 1][1];
  var monthlyChanges = monthlyProfit - monthlyProfitPrevious;
  
  if (monthlyChanges > greatestIncrease) { //loop through monthly changes calculations and if the monthly changes are bigger than the previous greatest increase, then the monthly increase variable gets updated until the greatest increase is found
    greatestIncrease = monthlyChanges; //when greatest increase is found, the monthly changes are updated
    greatestIncreaseMonth = finances[i][0]; //define greatest increase month by looping through the multidimensional array and selecting the first position element, in this case the text string
  }
}

console.log(`Greatest Increase in Profits/Losses: ${greatestIncreaseMonth} ($${greatestIncrease})`); //display answer in console month first then the greatest increase value


//Greatest decrease in Profits/Losses (date and difference) over the entire period

var greatestDecrease = 0; //define a variable for greatest decrease to be displayed in console
var greatestDecreaseMonth; //define a variable for the greatest decrease month to be diplayed in console

for (var i = 1; i < finances.length; i++) { //same logic as per average of changes and greatest profits/losses calculations above
  var monthlyProfit = finances[i][1];
  var monthlyProfitPrevious = finances[i - 1][1];
  var monthlyChanges = monthlyProfitPrevious - monthlyProfit; //variables swapped around for decrease of profits/losses calculation
  
  if (monthlyChanges > greatestDecrease) { //loop through monthly changes calculations and if the monthly changes are bigger than the previous greatest decrease, then the monthly decrease variable gets updated until the greatest decrease is found
    greatestDecrease = monthlyChanges; //when greatest decrease is found, the monthly changes are updated
    greatestDecreaseMonth = finances[i][0]; //define greatest decrease month by looping through the multidimensional array and selecting the first position element, in this case the month text string
  }
}

console.log(`Greatest Decrease in Profits/Losses: ${greatestDecreaseMonth} ($-${greatestDecrease})`); //display answer in console month first then the greatest decrease value with the changed sign to show it is a decrease
