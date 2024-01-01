# Console-Finances
Module 4 Bootcamp Challenge

In this project we have applied basic JavaScript notions learned in Module 4 of Bootcamp  - Javascript Fundamentals.

The activity includes an already provided index.js file with a set of financial records inside an array. The first column states the month whilst the second column shows the Profits/Losses recorded in the respective month.

The code for a financial analysis has been written to match the example provided. The following have been calculated:

## Information included in the analysis

1 - Number of months provided where var.lenght was used to calculate the amount of months included in the dataset.

2 - Net total amount over the entire period where the sum of the second column of numbers in the dataset was used inside a for loop.

3 - Average of changes was determined by calculating the sum of differences between the month and the previous month inside a for loop. The result was then divided by the number of months -1 to find out the average and .toFixed was used to display the result up to the nearest 100.

4 - Greatest increase in profits where the monthly profit changes where run inside a for loop to compare against the greatest increase variable. A variable for the month where the biggest increase was recorded was created and used to diplay the result.

5 - Greatest decrease in profits follows the same pattern of calculations as for the greatest increase, but with the values for previous month and current month swapped to find out the difference.

### How to use

Please copy both index.html and index.js files. 

Open index.html in browser, right-click and select Inspect option, followed by navigating to the Console tab where the financial analysis results can be found.

#### Useful links

Screenshot of the application

![Application Screenshot](Screenshot.jpg?raw=true "Application Screenshot")

Link to deployed application




